import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

import TopMobileMenu from "./TopMobileMenu";
import DownMenuMobile from "./DownMenuMobile";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex lg:hidden">
      <div
        className="text-white text-4xl bg-black p-2 rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        <IoMenu />
      </div>

      <div
        className={`bg-black absolute z-[999] top-0 left-0 w-full sm:w-3/4 h-[100vh] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <TopMobileMenu toggleMenu={toggleMenu} />
        <DownMenuMobile />
      </div>
      </div>
  );
}
