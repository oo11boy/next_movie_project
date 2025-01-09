import { toggleMenuprop } from '@/Types/MenuTypes';
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";


export default function TopMobileMenu({toggleMenu}:toggleMenuprop) {
  return (
   <div className="flex relative items-center justify-center">
            <img
              src="https://digimoviez.com/wp-content/themes/digimoviez68/assets/images/logo.png"
              alt="logo"
            />
            <IoIosCloseCircle
              className="top-2 right-2 absolute text-4xl text-[red] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
  
  );
}
