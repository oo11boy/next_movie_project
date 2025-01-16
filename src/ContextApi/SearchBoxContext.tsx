"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SearchBoxContextType {
  selectedType: "movie" | "tv";
  setSelectedType: (type: "movie" | "tv") => void;
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

  const value: SearchBoxContextType = {
    selectedType,
    setSelectedType,
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
