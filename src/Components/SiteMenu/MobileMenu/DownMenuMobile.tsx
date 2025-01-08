import React from 'react';

import { MenuItems } from "@/utils/Db";

import SubMenuMobile from "./SubMenuMobile";
export default function DownMenuMobile() {
  return (
   
    <ul className="p-4 text-xl overflow-y-auto h-full">
    {MenuItems.map((item, index) => (
      <div key={index}>
        {item.submenu ? (
          <SubMenuMobile item={item} index={index} />
        ) : (
          <li className="text-white gap-4 flex justify-start items-center border-b mb-4 pb-4 border-[#555]">
            <span className="text-[orange] text-3xl">{item.icon}</span>
            {item.title}
          </li>
        )}
      </div>
    ))}
  </ul>
  );
}
