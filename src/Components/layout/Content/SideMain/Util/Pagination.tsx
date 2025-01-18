"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Pagination({ data }: { data: IResultApi }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // State برای مدیریت لودینگ
  const totalPages = data.total_pages;
  const pagesToShow = 5;

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = async (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setIsLoading(true); 
      setCurrentPage(page);

      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`/?${params.toString()}`);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8">
      {/* Pagination Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
            currentPage === 1 || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          Previous
        </button>

        {/* Ellipsis for previous pages */}
        {startPage > 1 && (
          <button
            onClick={() => handlePageChange(startPage - 1)}
            disabled={isLoading}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
          >
            ...
          </button>
        )}

        {/* Page Numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={isLoading}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
                currentPage === page
                  ? "bg-white text-orange-500 border border-orange-500"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Ellipsis for next pages */}
        {endPage < totalPages && (
          <button
            onClick={() => handlePageChange(endPage + 1)}
            disabled={isLoading}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
          >
            ...
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
            currentPage === totalPages || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          Next
        </button>
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      <div className="text-gray-600 text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}