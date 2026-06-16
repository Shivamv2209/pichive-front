import NavbarPages from "../components/NavbarPages";
import { CircleCheckBig } from "lucide-react";

import img1 from "../assets/eventZ/img1.jpg";
import img2 from "../assets/eventZ/img2.jpg";
import img3 from "../assets/eventZ/img3.jpg";
import img4 from "../assets/eventZ/img4.jpg";
import img5 from "../assets/eventZ/img5.jpg";
import img6 from "../assets/eventZ/img6.jpg";

import "../styles/Events.css";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function ConfirmUploads() {
  const location = useLocation();
  const { event_code } = useParams();

  const uploadCount = location.state?.uploadCount || 0;

  const navigate = useNavigate();

  const goToEvent = () => {
    navigate(`/${event_code}`);
  };

  const gotoUploads = () => {
    navigate(`/upload/photos/${event_code}`);
  };

  return (
    <>
      <NavbarPages />

      <div className="relative overflow-hidden min-h-screen">

        {/* Decorative photos */}
        <img src={img1} alt="" className="photo top-left hidden lg:block" />
        <img src={img2} alt="" className="photo middle-left hidden lg:block" />
        <img src={img3} alt="" className="photo bottom-left hidden lg:block" />
        <img src={img4} alt="" className="photo top-right hidden lg:block" />
        <img src={img5} alt="" className="photo middle-right hidden lg:block" />
        <img src={img6} alt="" className="photo bottom-right hidden lg:block" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-5">

          <div className="w-full max-w-[550px] text-center">

            <div className="flex justify-center mb-8">
              <CircleCheckBig size={60} className="text-white" />
            </div>

            <h1 className="text-white font-bold text-3xl md:text-5xl">
              Upload Complete ✓
            </h1>

            <p className="text-[#868686] mt-6 text-base md:text-xl leading-relaxed">
              {uploadCount}{" "}
              {uploadCount > 1 ? "photos have" : "photo has"} been uploaded and
              processed successfully.
            </p>

            <p className="text-[#868686] mt-4 text-base md:text-xl">
              Guests can now find their memories.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

              <Link
                to={`/${event_code}`}
                onClick={goToEvent}
                className="w-full sm:w-auto text-center bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-[#868686] transition-all duration-300"
              >
                Go to Event
              </Link>

              <Link
                to={`/upload/photos/${event_code}`}
                onClick={gotoUploads}
                className="w-full sm:w-auto text-center border border-[#868686] text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Upload More Photos
              </Link>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ConfirmUploads;