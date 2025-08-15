import React, { useState } from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLinks from "./NavBarLinks";
import NavbarBtn from "./NavbarBtn";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBarMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed lg:left-[50%] lg:-translate-x-[50%] left-0 translate-x-0 z-20 flex gap-4 mt-2">

      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-200">
        <NavBarLogo />

        <div className={`lg:block ${menuOpen ? 'block' : 'hidden'}`}>

          <NavBarLinks />
        </div>

        <NavbarBtn />
      </div>

      <div className="flex lg:hidden sm:block bg-black p-6 items-center justify-center rounded-full border-[0.5px] border-orange-400">
        <button onClick={toggleMenu} className="text-2xl p-3 border border-orange-400 rounded-full text-white">
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavBarMain;
