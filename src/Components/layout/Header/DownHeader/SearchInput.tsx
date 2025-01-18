import { useSearchBox } from "@/ContextApi/SearchBoxContext";
import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
  const {handleSearch,setSearchText,searchText}=useSearchBox();
  return (
    <div className="relative" >
      <input
        className="bg-black focus:outline-none text-white rounded-lg  py-3 px-4"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search..."
      />
      <IoIosSearch onClick={handleSearch} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-500 text-3xl" />
    </div>
  );
}
