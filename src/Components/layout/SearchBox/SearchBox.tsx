"use client";
import RadioSelect from "@/Components/layout/SearchBox/Util/RadioSelect/RadioSelect";
import { useSearchBox } from "@/ContextApi/SearchBoxContext";
import React from "react";
import TypeCheckmarks from "./Util/Checkmarks/TypeCheckmarks";
import LanguageCheckmarks from "./Util/Checkmarks/LanguageCheckmarks";
import MultiRange from "./Util/MultiRange/MultiRange";

export default function SearchBox() {
  const { searchText, setSearchText, selectedType, handleSearch } =
    useSearchBox();

  return (
    <div className="global-w flex justify-start  text-white  bg-[#242424]">
      <div className="w-2/12 bg-[#1C1C1C] rounded-br-[6em]">search</div>

      <div className="w-10/12 content-start gap-4  px-3 py-5  flex flex-wrap  justify-start">
        <div className="w-full h-[30px] flex space-x-4">
          <div className="w-full h-[30px] flex items-center space-x-2">
            <input
              type="text"
              placeholder="search text..."
              className="bg-[#1C1C1C] outline-none px-4 rounded-lg h-[40px] w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <RadioSelect />
        </div>

        <TypeCheckmarks type={selectedType} />
        <LanguageCheckmarks />
        <LanguageCheckmarks />
        <MultiRange />
        <div className="flex w-[33%] justify-end">
          <button
            onClick={handleSearch}
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg"
          >
            Save Search
          </button>
        </div>
      </div>
    </div>
  );
}
