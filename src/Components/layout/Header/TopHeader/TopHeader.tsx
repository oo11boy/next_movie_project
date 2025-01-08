import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { PiSignIn } from "react-icons/pi";

import SignBtn, { DarkModeToggle } from "@/Components/Btns/Btns";
export default function TopHeader() {
  return (
    <div className="global-w flex flex-col-reverse gap-y-10 sm:space-y-2 sm:flex-row justify-between items-center">
      <div className="flex justify-start space-x-2 items-center">
        <SignBtn text={"Sign Up"} icon={<LuUserPlus />} />
        <SignBtn text={"Sign In"} icon={<PiSignIn />} />
      </div>

      <div className="flex justify-between w-full sm:w-[unset] space-x-2 items-center">
    
          <DarkModeToggle />
     

        <div>
          <img
            className="w-[247px] object-cover"
            src="https://digimoviez.com/wp-content/uploads/2023/09/logo-light.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
