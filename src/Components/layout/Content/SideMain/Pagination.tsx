"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Pagination({ data }: { data: IResultApi }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = data.total_pages; 
  const pagesToShow = 10; 

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const router = useRouter();
  const searchParams = useSearchParams(); 

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

     const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`/?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8">
 
      <div className="flex space-x-2">
   
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>

     
        {startPage > 1 && (
          <button
            onClick={() => handlePageChange(startPage - 1)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            ...
          </button>
        )}

      
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {page}
            </button>
          )
        )}

      
        {endPage < totalPages && (
          <button
            onClick={() => handlePageChange(endPage + 1)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            ...
          </button>
        )}

       
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div>

     
      <div className="text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}