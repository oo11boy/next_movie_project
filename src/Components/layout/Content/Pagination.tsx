"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import React, { useState } from "react";

export default function Pagination({ data }: { data: IResultApi }) {
  const [currentPage, setCurrentPage] = useState(1); // حالت فعلی صفحه
  const totalPages = data.total_pages; // تعداد کل صفحات

  // تعداد صفحاتی که در هر لحظه نمایش داده می‌شوند
  const pagesToShow = 10;

  // محاسبه محدوده صفحات
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // تابع برای تغییر صفحه
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // در اینجا می‌توانید درخواست API برای دریافت داده‌های صفحه جدید را انجام دهید.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8">
      {/* نمایش شماره صفحات */}
      <div className="flex space-x-2">
        {/* دکمه قبلی */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          قبلی
        </button>

        {/* دکمه "..." برای صفحات قبل */}
        {startPage > 1 && (
          <button
            onClick={() => handlePageChange(startPage - 1)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            ...
          </button>
        )}

        {/* شماره صفحات */}
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

        {/* دکمه "..." برای صفحات بعد */}
        {endPage < totalPages && (
          <button
            onClick={() => handlePageChange(endPage + 1)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            ...
          </button>
        )}

        {/* دکمه بعدی */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          بعدی
        </button>
      </div>

      {/* نمایش اطلاعات صفحه فعلی */}
      <div className="text-gray-600">
        صفحه {currentPage} از {totalPages}
      </div>
    </div>
  );
}