import logo from "../assets/logo-white.png";

function NavbarPages() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-center px-4 py-2 backdrop-blur-[25px]">

        <div className="flex items-center">
          <img
            src={logo}
            alt="PICHIVE"
            className="h-14 w-14 md:h-18 md:w-18"
          />

          <span className="font-bold text-white tracking-[0.02rem]">
            PICHIVE
          </span>
        </div>

      </nav>
    </header>
  );
}

export default NavbarPages;