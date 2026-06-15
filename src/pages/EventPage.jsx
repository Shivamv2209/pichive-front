import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarPages from "../components/NavbarPages";
import { Camera, UploadCloud, ShieldCheck } from "lucide-react";
import img1 from "../assets/eventZ/img1.jpg";
import img2 from "../assets/eventZ/img2.jpg";
import img3 from "../assets/eventZ/img3.jpg";
import img4 from "../assets/eventZ/img4.jpg";
import img5 from "../assets/eventZ/img5.jpg";
import img6 from "../assets/eventZ/img6.jpg";
import "../styles/Events.css";

function EventPage() {
  const { event_code } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const handleUClick = ()=>{
    navigate(`/upload/photos/${event_code}`)
  }

  const handleFind = ()=>{
    navigate(`/search/${event_code}`)
  }


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
  return (
    <>
      <NavbarPages />
      <div className="relative min-h-screen overflow-hidden">
        <img src={img1} className="photo top-left" />
        <img src={img2} className="photo middle-left" />
        <img src={img3} className="photo bottom-left" />
        <img src={img4} className="photo top-right" />
        <img src={img5} className="photo middle-right" />
        <img src={img6} className="photo bottom-right" />

        {event ? (
          <div className="flex mt-40 max-w-5xl mx-auto flex-col items-center justify-center z-10 relative">
            <h1 className="text-5xl text-white font-bold">
              Welcome to {event}
            </h1>
            <p className="text-[#868686] text-xl mt-4">
              Capture, share and relive your memories.
            </p>
            <div className="flex gap-10 mt-20">
              <div className="text-center w-[340px] h-[420px] bg-[#1e1e1e] rounded-[32px] border border-[#222] flex flex-col items-center justify-between py-10 px-8 hover:scale-105 transition-all duration-300">
                <Camera className="text-white" size={45}/>
                <h2 className="text-3xl font-bold text-white mt-8">
                  Find Your Photos
                </h2>
                <p className="text-[#868686] text-center mt-5 leading-8">
                  Upload a selfie and let AI find every photo you're in.
                </p>
                <button onClick={handleFind}
                  className="w-full hover:bg-[#868686] bg-white text-black font-semibold rounded-2xl py-4 mt-6">
                  Find Photos →
                </button>
              </div>
              <div className="text-center w-[340px] h-[420px] bg-[#1e1e1e] rounded-[32px] border border-[#222] flex flex-col items-center justify-between py-10 px-8 hover:scale-105 transition-all duration-300">
                <UploadCloud className="text-white" size={45}/>
                <h2 className="text-3xl font-bold text-white mt-8">
                   Upload Photos
                </h2>
                <p className="text-[#868686] text-center mt-5 leading-8">
                  Photographers and organizers can securely upload event memories.
                </p>
                <button onClick={handleUClick}
                  className="w-full hover:bg-[#868686] bg-white text-black font-semibold rounded-2xl py-4 mt-6">
                  Upload Photos →
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-10">
                <ShieldCheck className="text-[#868686]"/>
                <h4 className="text-[#868686]">Your photos are private and secure.</h4>
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}

export default EventPage;
