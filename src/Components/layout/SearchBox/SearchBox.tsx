"use client";
import RadioSelect from "@/Components/layout/SearchBox/Util/RadioSelect/RadioSelect";
import { useSearchBox } from "@/ContextApi/SearchBoxContext";
import React from "react";
import TypeCheckmarks from "./Util/Checkmarks/TypeCheckmarks";
import LanguageCheckmarks from "./Util/Checkmarks/LanguageCheckmarks";
import MultiRange from "./Util/MultiRange/MultiRange";
import StartYearCheckmarks from "./Util/Checkmarks/StartYearsCheckmarks";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SearcBoxInput from "./Util/SearchInput/SearchBoxInput";
import SearchBtn from "./Util/SearchBtn/SearchBtn";
export default function SearchBox() {
  const { searchText, setSearchText, selectedType, handleSearch } =useSearchBox();

  return (
    <div className="global-w flex justify-start  text-white  bg-[#242424]">
      <div className="hidden lg:flex w-2/12 justify-center items-center  bg-[#1C1C1C] rounded-br-[6em]">
        <TravelExploreIcon sx={{ fontSize: "6em", color: "orange" }} />
      </div>

      <form onSubmit={handleSearch} className=" w-full lg:w-10/12 content-start gap-4  px-3 py-5  flex flex-wrap  justify-center lg:justify-start">
        <div className="w-full flex-col sm:flex-row  sm:h-[30px] flex space-x-4">
          <SearcBoxInput
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <RadioSelect />
        </div>

        <TypeCheckmarks type={selectedType} />
        <LanguageCheckmarks />
        <StartYearCheckmarks />
        <MultiRange />
        <SearchBtn handleSearch={handleSearch} />
      </form>
    </div>
  );
}
