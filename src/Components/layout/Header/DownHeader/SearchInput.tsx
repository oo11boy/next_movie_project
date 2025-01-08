import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
  return (
    <form className="relative" action="">
      <input
        className="bg-black focus:outline-none text-white rounded-lg  py-3 px-4"
        type="text"
        placeholder="search..."
      />
      <IoIosSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-500 text-3xl" />
    </form>
  );
}
