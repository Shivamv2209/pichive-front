import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const handleUClick = () => {
    navigate(`/upload/photos/${event_code}`);
  };

  const handleFind = () => {
    navigate(`/search/${event_code}`);
  };

  useEffect(() => {
    async function fetchEvent() {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/events/${event_code}`
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

        {/* Decorative Photos - hidden on mobile */}
        <img src={img1} className="photo top-left hidden lg:block" />
        <img src={img2} className="photo middle-left hidden lg:block" />
        <img src={img3} className="photo bottom-left hidden lg:block" />
        <img src={img4} className="photo top-right hidden lg:block" />
        <img src={img5} className="photo middle-right hidden lg:block" />
        <img src={img6} className="photo bottom-right hidden lg:block" />

        {event ? (
          <div className="relative z-10 max-w-5xl mx-auto px-5 mt-28 md:mt-40 flex flex-col items-center text-center">

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight">
              Welcome to {event}
            </h1>

            <p className="text-[#868686] text-base md:text-xl mt-4">
              Capture, share and relive your memories.
            </p>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-8 mt-14 md:mt-20 w-full items-center justify-center">

              {/* Find Photos */}
              <div className="w-full max-w-[340px] min-h-[420px] bg-[#1e1e1e] rounded-[32px] border border-[#222] flex flex-col items-center justify-between py-10 px-8 hover:scale-105 transition-all duration-300">

                <Camera className="text-white" size={45} />

                <h2 className="text-2xl md:text-3xl font-bold text-white mt-8">
                  Find Your Photos
                </h2>

                <p className="text-[#868686] text-center mt-5 leading-8">
                  Upload a selfie and let AI find every photo you're in.
                </p>

                <button
                  onClick={handleFind}
                  className="w-full bg-white text-black font-semibold rounded-2xl py-4 mt-6 hover:bg-[#868686]"
                >
                  Find Photos →
                </button>
              </div>

              {/* Upload Photos */}
              <div className="w-full max-w-[340px] min-h-[420px] bg-[#1e1e1e] rounded-[32px] border border-[#222] flex flex-col items-center justify-between py-10 px-8 hover:scale-105 transition-all duration-300">

                <UploadCloud className="text-white" size={45} />

                <h2 className="text-2xl md:text-3xl font-bold text-white mt-8">
                  Upload Photos
                </h2>

                <p className="text-[#868686] text-center mt-5 leading-8">
                  Photographers and organizers can securely upload event memories.
                </p>

                <button
                  onClick={handleUClick}
                  className="w-full bg-white text-black font-semibold rounded-2xl py-4 mt-6 hover:bg-[#868686]"
                >
                  Upload Photos →
                </button>
              </div>

            </div>

            {/* Security Note */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-10 text-center">
              <ShieldCheck className="text-[#868686]" />
              <h4 className="text-[#868686]">
                Your photos are private and secure.
              </h4>
            </div>

          </div>
        ) : (
          <p className="text-white mt-40 text-center">Loading...</p>
        )}
      </div>
    </>
  );
}

export default EventPage;