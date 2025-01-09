"use client";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type SignBtnProps={
text:string;
icon:React.ReactNode
}
export default function SignBtn({ text, icon }:SignBtnProps) {
  return (
    <button className="bg-[#484848] focus:outline-none transition-all ease-linear flex items-center justify-center space-x-2 text-white hover:bg-[orange] py-2 px-4 rounded-lg">
      <span>{icon}</span>

      <span>{text}</span>
    </button>
  );
}

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="darkModeToggle"
        className="opacity-0 absolute"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="darkModeToggle"
        className="bg-[#484848] w-16 h-7 rounded-full p-1 cursor-pointer flex justify-between items-center relative"
      >
        <FaMoon className="text-yellow-400" />
        <FaSun className="text-yellow-500" />
        <span
          className={`bg-white w-6 h-5 rounded-full absolute left-1 top-1 transition-transform duration-200 ${
            isDarkMode ? "translate-x-8" : ""
          }`}
        ></span>
      </label>
    </div>
  );
}
