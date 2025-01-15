"use client";
import React, { useState } from "react";

export default function SearchBox() {
  const [selectedType, setSelectedType] = useState("");
  return (
    <div className="global-w flex justify-start h-[300px] text-white  bg-[#242424]">
      <div className="w-2/12 h-full bg-[#1C1C1C] rounded-br-[6em]">search</div>
    
    
      <div className="w-10/12  px-3 py-5  flex flex-wrap  justify-start">
     
      <div className="w-3/12 flex space-x-2">

    
        <label>Type:</label>
        <div className="flex space-x-2 ">
          <label className="radio-button">
            <input
              type="radio"
              name="type"
              value="movie"
              className="hidden"
              onChange={() => setSelectedType("movie")}
            />
            <span
              className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                selectedType === "movie" ? "bg-[orange]" : "bg-[#1C1C1C]"
              }`}
            >
              Movie
            </span>
          </label>
          <label className="radio-button">
            <input
              type="radio"
              name="type"
              value="serie"
              className="hidden"
              onChange={() => setSelectedType("serie")}
            />
            <span
              className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                selectedType === "serie" ? "bg-[orange]" : "bg-[#1C1C1C]"
              }`}
            >
              Serie
            </span>
          </label>
        </div>
      </div>
      
      
      </div>
    </div>
  );
}
