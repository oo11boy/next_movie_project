"use client";
import Checkmarks from "@/Components/Checkmarks/Checkmarks";
import RadioSelect from "@/Components/RadioSelect/RadioSelect";
import { useSearchBox } from "@/ContextApi/SearchBoxContext";
import React, { useState } from "react";

export default function SearchBox() {
  const {searchText,setSearchText , selectedType ,handleSearch} = useSearchBox();


  return (
    <div className="global-w flex justify-start h-[300px] text-white  bg-[#242424]">
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

        <div className="w-3/12 flex">
          <Checkmarks type={selectedType} />
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save Search
          </button>
        </div>
      </div>
    </div>
  );
}