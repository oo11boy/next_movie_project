import React from "react";
import './Menu.css';
import { MenuItems } from "@/utils/Db";

type SubMenuprop={
  item:MenuItems;
  
}
export default function SubMenu({ item }:SubMenuprop) {
  const renderSubMenu = (startIndex:number, endIndex:number) => {
    return item.submenu
      .filter((_, index) => index >= startIndex && index <= endIndex)
      .map((subItem) => (
        <ul key={subItem.id} className="flex flex-col justify-between">
          <li className="m-2 cursor-pointer list-disc text-sm">{subItem.title}</li>
        </ul>
      ));
  };

  return (
    <div className="w-[800px] rounded-md absolute top-10 z-[999] left-0 h-[auto] bg-[#1d1d1ded]">
      <div className="flex flex-start gap-4">
        <div className="p-4">
          {renderSubMenu(0, 4)}
        </div>
        <div className="p-4">
          {renderSubMenu(5, 9)}
        </div>
        <div className="flex items-end">
          <img src={item.img} alt="img" />
        </div>
      </div>
    </div>
  );
}