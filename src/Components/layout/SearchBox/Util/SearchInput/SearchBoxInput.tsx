import React from "react";
type SearcBoxInput = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};
export default function SearcBoxInput({
  searchText,
  setSearchText,
}: SearcBoxInput) {
  return (
    <div className="w-full h-[30px] mb-6 sm:mb-[unset] flex items-center space-x-2">
      <input
        type="text"
        placeholder="search text..."
        className="bg-[#1C1C1C] outline-none px-4 rounded-lg h-[40px] w-full"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
