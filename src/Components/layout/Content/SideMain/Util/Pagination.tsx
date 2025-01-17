"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Pagination({ data }: { data: IResultApi }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = data.total_pages;
  const pagesToShow = 5; // تعداد صفحات نمایش داده شده در یک زمان (برای دستگاه‌های کوچک کمتر شده است)

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
      {/* Pagination Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
            currentPage === 1
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
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
                currentPage === page
                  ? "bg-white text-orange-500 border border-orange-500" // حالت انتخاب‌شده
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
            className="px-3 py-1 sm:px-4 sm:py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
          >
            ...
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded transition-colors ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          Next
        </button>
      </div>

      {/* Page Info */}
      <div className="text-gray-600 text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}