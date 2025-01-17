"use client";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import { useRouter } from "next/navigation";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SearchBoxContextType {
  selectedType: "movie" | "tv";
  setSelectedType: (type: "movie" | "tv") => void;
  setSearchText: (searchText: string) => void;
  searchText: string;
  handleSearch: () => void;
  selectedGenre: IGenreOutput | null;
  setSelectedGenre: (selectedGenre: IGenreOutput | null) => void;
  currentPage:number
  setCurrentPage:(  currentPage:number)=>void
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
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (selectedType) {
      queryParams.append("type", selectedType);
    }

    if (selectedGenre?.id) {
      queryParams.append("genre", selectedGenre.id.toString());
    }

    if (searchText) {
      queryParams.append("searchText", searchText);
    }

    router.push(`/?${queryParams.toString()}`);
  };
  const value: SearchBoxContextType = {
    selectedType,
    setSelectedType,
    setSearchText,
    searchText,
    handleSearch,
    setSelectedGenre,
    selectedGenre,
    currentPage,
    setCurrentPage
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
