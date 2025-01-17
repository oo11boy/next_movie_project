import { IMovieTvOutput } from "@/Types/GetMovieTvTypes";
import React from "react";

export default function VoteImdb({ item }: { item: IMovieTvOutput }) {
  return (
    <div className="text-white  w-1/4 sm:w-[unset] m-auto sm:absolute sm:top-4 sm:right-4 text-center">
      <div className=" border-b-2 opacity-50 border-dashed">
        <span className="text-[orange] ">{item.vote_average}</span>/10
      </div>
      <div>{item.vote_count} votes</div>
      <div className="bg-[orange] text-sm font-semibold text-white p-2 rounded-md flex items-center justify-center">
        IMDB
      </div>
    </div>
  );
}
