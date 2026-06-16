import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavbarPages from "../components/NavbarPages";
import { Search } from "lucide-react";
import SearchLoading from "../components/SearchLoader";

function SearchPage() {
  const { event_code } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const captureSelfie = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      setCapturedImage(blob);

      const stream = video.srcObject;

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }, "image/jpeg");
  };

  useEffect(() => {
    async function fetchEvent() {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/events/${event_code}`,
        );
        const event = result.data.event;
        const formatName =
          event.name.charAt(0).toUpperCase() + event.name.slice(1);
        setEvent(formatName);
      } catch (err) {
        console.log(err);
      }
    }

    fetchEvent();
  }, [event_code]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video:{
          facingMode:"user",
        }
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRetake = async () => {
    setCapturedImage(null);

    await startCamera();
  };

  useEffect(() => {
    startCamera();
    return ()=>{
        if (streamRef.current){
            streamRef.current.getTracks().forEach(track => track.stop())
        }
    }
  }, []);

  const handleFindPhotos= async ()=>{
    try{
        if(!capturedImage) return;
        const formData = new FormData();
        setLoading(true);
        formData.append(
            "selfie",
            capturedImage,
            "selfie.jpg"
        );
        const result = await axios.post(`http://localhost:3000/api/search/${event_code}`,
            formData,
        )
        const urls = result.data.urls
        setLoading(false);
        navigate(`/photos/${event_code}`,
            {
                state:{
                    urls:urls
                }
            }
        )
    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <NavbarPages />
      {loading ? (
        <SearchLoading eventName={event} />
      ):(
        <div className="max-w-5xl mx-auto px-5 mt-24 md:mt-40">
        <div className="flex flex-col items-center">
          <div className="w-20 rounded-xl bg-[#868686] p-2 border border-white flex items-center justify-center">
            <Search size={40} className="text-white" />
          </div>
          <h2 className="text-white font-bold text-3xl md:text-5xl mt-4 text-center">
            Find Your Photos
          </h2>
          <p className="mt-5 text-[#868686] text-sm md:text-base text-center">
            Upload a selfie to find all your photos from {event}.
          </p>
          <div className="w-full max-w-[450px] bg-[#1e1e1e] p-5 md:p-6 mt-6 rounded-[32px]">
            <div className="text-center text-[#868686] text-sm font-medium mt-4">
              <p>Position your face and capture a selfie.</p>
            </div>
            {capturedImage ? (
              <img
                src={URL.createObjectURL(capturedImage)}
                alt="captured selfie"
                className="w-full max-w-[350px] aspect-[3/4] object-cover mx-auto rounded-[32px] mt-5"
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full max-w-[350px] aspect-[3/4] object-cover mx-auto rounded-[32px] mt-5"
              />
            )}
            <canvas ref={canvasRef} hidden />
            <div className="flex justify-center mt-6">
              {capturedImage ? (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button onClick={handleFindPhotos} className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-2xl">
                    Find My Photos
                  </button>
                  <button onClick={handleRetake} className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-2xl">
                    Retake Selfie
                  </button>
                </div>
              ) : (
                <button
                  onClick={captureSelfie}
                  className="bg-white text-black px-6 py-3 rounded-2xl mt-8"
                >
                  Capture Selfie
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default SearchPage;
