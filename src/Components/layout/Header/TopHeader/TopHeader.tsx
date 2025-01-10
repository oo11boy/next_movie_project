import React from "react";

import { LuUserPlus } from "react-icons/lu";

import { GoSignIn } from "react-icons/go";
import SignBtn from "@/Components/Btns/SignBtn";
import { DarkModeToggle } from "@/Components/Btns/DarkModeToggleBtn";


export default function TopHeader() {
  
  return (
    <div className="global-w flex flex-col-reverse gap-y-10 sm:space-y-2 sm:flex-row justify-between items-center">
      <div className="flex justify-start space-x-2 items-center">
        <SignBtn text={"Sign Up"} icon={<LuUserPlus />} />
        <SignBtn text={"Sign In"} icon={<GoSignIn />} />
      </div>

      <div className="flex justify-between w-full sm:w-[unset] space-x-2 items-center">
        <DarkModeToggle />

        <div>
          <img
            className="w-[247px] object-cover"
            src="https://digimoviez.com/wp-content/uploads/2023/09/logo-light.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
