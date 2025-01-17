import React from 'react';
import PreviewIcon from "@mui/icons-material/Preview";
import Link from "next/link";
import { IMovieTvOutput } from '@/Types/GetMovieTvTypes';
export default function CardImgSide({item}:{item:IMovieTvOutput}) {
  return (
    <div className="w-full sm:w-4/12 flex flex-col items-start justify-center">
    <img
      className="w-11/12 m-auto sm:w-9/12 h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4"
      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
      alt=""
    />

    <Link
      className=" w-11/12 m-auto mb-4 sm:mb-[unset] sm:w-9/12 h-[80px] sm:h-[60px] md:h-[80px] overflow-hidden rounded-md flex items-center group"
      href={`/` + item.id}
    >
      <span className="text-white bg-[#2D2D2D] w-full h-full flex items-center justify-center group-hover:text-orange-500 transition-colors duration-300">
        View
      </span>
      <span className="relative text-orange-500 w-full h-full flex items-center justify-center group-hover:text-white transition-colors duration-300">
        <div className="absolute inset-[-5px]  bg-[#1a1a1a] transform skew-x-12 group-hover:bg-orange-500 transition-colors duration-300"></div>
        <PreviewIcon className="relative z-10" />
      </span>
    </Link>
  </div>
  );
}
