import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-white.png";
import HeroText from "./HeroText";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-5 md:px-10 py-2 backdrop-blur-[25px]">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt=""
            className="h-14 w-14 md:h-18 md:w-18"
          />

          <span className="font-bold text-white tracking-[0.02rem]">
            PICHIVE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <a href="/#features" className="text-[#868686] hover:text-white">
            Features
          </a>

          <a href="/#working" className="text-[#868686] hover:text-white">
            How It Works
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6 text-[14px]">

          <Link to="/create-event">
            <button className="text-[#B6B6B6] hover:text-white font-medium">
              Find My Photos
            </button>
          </Link>

          <Link to="/create-event">
            <button className="bg-white text-black rounded-2xl px-4 py-2 hover:bg-[#868686] font-medium">
              Create Event
            </button>
          </Link>

        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-[25px] px-6 pb-6">

          <div className="flex flex-col gap-5 text-center">

            <a
              href="/#features"
              className="text-[#868686]"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>

            <a
              href="/#working"
              className="text-[#868686]"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>

            <Link
              to="/create-event"
              onClick={() => setIsOpen(false)}
            >
              <button className="text-[#B6B6B6] font-medium">
                Find My Photos
              </button>
            </Link>

            <Link
              to="/create-event"
              onClick={() => setIsOpen(false)}
            >
              <button className="bg-white text-black rounded-2xl px-4 py-3 w-full font-medium">
                Create Event
              </button>
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;
