"use client";
import Checkmarks from "@/Components/Checkmarks/Checkmarks";
import React, { useState } from "react";

export default function SearchBox() {
  const [selectedType, setSelectedType] = useState<"movie" | "tv">("movie");
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
            />
          </div>

          <div className="h-[40px]  flex space-x-2">
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
                  onChange={() => setSelectedType("tv")}
                />
                <span
                  className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                    selectedType === "tv" ? "bg-[orange]" : "bg-[#1C1C1C]"
                  }`}
                >
                  Serie
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-3/12 flex">
          <Checkmarks type={selectedType} />
        </div>
      </div>
    </div>
  );
}
