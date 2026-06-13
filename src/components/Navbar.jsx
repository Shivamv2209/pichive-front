import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";
import HeroText from "./HeroText";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full ">
      <div className="mx-auto mt-0 max-w-screen">
        <nav className="flex items-center justify-around p-2 backdrop-blur-[25px]">
         <div className="flex items-center justify-center">
           <span className="text-white">
            <img src={logo} alt="" className="h-18 w-18 text-white" />
          </span>
          <span className="font-bold text-white tracking-[0.02rem]">PICHIVE</span>
         </div>
          <div className="flex items-center gap-6 text-[14px]">
            <Link to="/create-event">
             <button className="text-[#B6B6B6] hover:text-white cursor-pointer font-medium">
              Find My Photos
            </button>
            </Link>
            <Link to="/create-event">
            <button className="text-black rounded-2xl bg-white p-2 hover:bg-[#868686]  cursor-pointer font-medium">
              Create Event
            </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
