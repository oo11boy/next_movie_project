"use client";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import { IinputApiProps } from "@/Types/GetMovieTvTypes";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SearchBoxContextType {
  selectedType: "movie" | "tv";
  setSelectedType: (type: "movie" | "tv") => void;
  setSearchText: (searchText: string) => void;
  searchText: string;
  handleSearch:()=>void;
  selectedGenre:IGenreOutput | null;
  setSelectedGenre:(selectedGenre:IGenreOutput | null)=>void
  searchArray:IinputApiProps;
}

export const SearchBoxContext = createContext<SearchBoxContextType | null>(
  null
);

export const SearchBoxContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedType, setSelectedType] = useState<"movie" | "tv">("movie");
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<IGenreOutput | null>(null); 
  const [searchArray,setSearchArray]=useState<IinputApiProps >({});
  const handleSearch = () => {
    const searchData = {
      searchText: searchText,
      type: selectedType,
      genre:selectedGenre?.id,
    };
    setSearchArray(searchData);
  };
  const value: SearchBoxContextType = {
    selectedType,
    setSelectedType,
    setSearchText,
    searchText,
    handleSearch,
    setSelectedGenre,
    selectedGenre,
    searchArray
  };

  return (
    <SearchBoxContext.Provider value={value}>
      {children}
    </SearchBoxContext.Provider>
  );
};

export const useSearchBox = () => {
  const context = useContext(SearchBoxContext);
  if (!context) {
    throw new Error(
      "useSearchBox must be used within a SearchBoxContextProvider"
    );
  }
  return context;
};
