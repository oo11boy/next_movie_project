import { useSearchBox } from '@/ContextApi/SearchBoxContext';
import React, { useState } from 'react';

export default function RadioSelect() {
    const {selectedType,setSelectedType}=useSearchBox();
    return (
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
  );
}
