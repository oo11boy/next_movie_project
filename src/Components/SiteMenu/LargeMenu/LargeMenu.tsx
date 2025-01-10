import React, { useState } from "react";

import { MenuItems } from "@/utils/Db";

import SubMenu from "./SubMenu";
import "./Menu.css";

export default function LargeMenu() {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  return (
    <div className=" hidden lg:flex">
      <ul onMouseLeave={() => setActiveSubmenu(null)} className="menuNav">
        {MenuItems.map((item, index) =>
          item.submenu ? (
            <li
              key={index}
              onMouseEnter={() => setActiveSubmenu(index)}
              className="menuItemWithSubmenu"
            >
              <span className="transition ease-out hover:scale-110">
                {item.icon}
              </span>
              <span className="itemTitle">{item.title}</span>
              <div
                className={`subMenu ${activeSubmenu === index ? "visible" : ""}`}
              >
                <SubMenu item={item} />
              </div>
            </li>
          ) : (
            <li
              key={index}
              onMouseEnter={() => setActiveSubmenu(index)}
              className="menuItem"
            >
              <span className="transition ease-out hover:scale-110">
                {item.icon}
              </span>
              <span className="itemTitle">{item.title}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
