"use client";

import { IGenreOutput } from "@/Types/GetGenreTypes";
import { useRouter } from "next/navigation";
import { SelectChangeEvent } from "@mui/material";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SearchBoxContextType {
  selectedType: "movie" | "tv";
  setSelectedType: (type: "movie" | "tv") => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  handleSearch: () => void;
  selectedGenre: IGenreOutput | null;
  setSelectedGenre: (selectedGenre: IGenreOutput | null) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  languageSelected: string;
  setLanguageSelected: (languageSelected: string) => void;
  handleChangeLanguage: (event: SelectChangeEvent<string>) => void;
  rating: number[];
  setRating: (rating: number[]) => void;
  handleChangeRating: (event: Event, newValue: number | number[]) => void;
  startYear: { id: number; value: string; startYear: string }[];
  selectedYear: string;
  handleChangeStartYear: (event: SelectChangeEvent<string>) => void;
}

export const SearchBoxContext = createContext<SearchBoxContextType | null>(null);

export const SearchBoxContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedType, setSelectedType] = useState<"movie" | "tv">("movie");
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<IGenreOutput | null>(null);
  const [languageSelected, setLanguageSelected] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState<number[]>([3, 7]);
  const [selectedYear, setSelectedYear] = useState("");
  const router = useRouter();

  const startYearArray = [
    ...Array.from({ length: 46 }, (_, index) => {
      const year = 2025 - index;
      return {
        id: index + 1,
        value: year.toString(),
        startYear: year.toString(),
      };
    })
  ];
  
  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (selectedType) queryParams.append("type", selectedType);
    if (selectedGenre?.id) queryParams.append("genre", selectedGenre.id.toString());
    if (searchText) queryParams.append("searchText", searchText);
    if (languageSelected) queryParams.append("withOriginalLanguage", languageSelected);
    if (rating) {
      queryParams.append("ratingStart", rating[0].toString());
      queryParams.append("ratingEnd", rating[1].toString());
    }
    if (selectedYear) {

     queryParams.append("yearStart", selectedYear); 
    
    }

    router.push(`/?${queryParams.toString()}`);
  };

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    setLanguageSelected(event.target.value);
  };

  const handleChangeRating = (event: Event, newValue: number | number[]) => {
    setRating(newValue as number[]);
  };

  const handleChangeStartYear = (event: SelectChangeEvent<string>) => {
    setSelectedYear(event.target.value);
  };

  const value: SearchBoxContextType = {
    selectedType,
    setSelectedType,
    searchText,
    setSearchText,
    handleSearch,
    selectedGenre,
    setSelectedGenre,
    currentPage,
    setCurrentPage,
    languageSelected,
    setLanguageSelected,
    handleChangeLanguage,
    rating,
    setRating,
    handleChangeRating,
    startYear: startYearArray,
    selectedYear,
    handleChangeStartYear,
  };

  return <SearchBoxContext.Provider value={value}>{children}</SearchBoxContext.Provider>;
};

export const useSearchBox = () => {
  const context = useContext(SearchBoxContext);
  if (!context) {
    throw new Error("useSearchBox must be used within a SearchBoxContextProvider");
  }
  return context;
};