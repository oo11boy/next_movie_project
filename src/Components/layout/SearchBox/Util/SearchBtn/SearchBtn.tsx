import React from "react";

type SearchBtn = {
  handleSearch: () => void;
};

export default function SearchBtn({ handleSearch }: SearchBtn) {
  return (
    <div className="flex ml-1 w-full md:w-[32%] justify-end">
      <button
        onClick={handleSearch} 
        className="bg-[orange] w-full text-black px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}