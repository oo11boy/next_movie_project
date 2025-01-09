import {  SubMenuMobileProps } from "@/Types/MenuTypes";

import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";


export default function SubMenuMobile({ item, index }: SubMenuMobileProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <li className="text-white border-b mb-4 pb-4 border-[#555]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSubMenu(index)}
      >
        <div className="flex justify-start gap-3">
          <span className="text-[orange] text-3xl">{item.icon}</span>

          {item.title}
        </div>

        <MdExpandMore
          className={`text-[orange] bg-slate-700 text-4xl transition-transform duration-300 ${
            openSubMenu === index ? "rotate-180" : ""
          }`}
        />
      </div>

      <ul
        className={`bg-slate-900 px-4 overflow-hidden transition-all duration-300 ${
          openSubMenu === index ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {item.submenu.map((subItem) => (
          <li
            key={subItem.id}
            className="text-white flex justify-start items-center border-b py-2 border-[#555]"
          >
            {subItem.title}
          </li>
        ))}
      </ul>
    </li>
  );
}
