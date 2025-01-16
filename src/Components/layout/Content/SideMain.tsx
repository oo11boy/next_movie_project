"use client";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { GetGenres } from "@/utils/GetGenreApi";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function SideMain({ data, type }: { data: IResultApi; type: "movie" | "tv" }) {
  const [listGenre, setListGenre] = useState<IGenreOutput[]>([]);

  useEffect(() => {
    const fetchGenre = async () => {
      const data = await GetGenres({ type: type });
      setListGenre(data);
    };
    fetchGenre();
  }, [type]);

  return (
    <div className="bg-[green] w-full lg:w-9/12">
      {data.results.map((item) => {
        // Find all matching genres for the item
        const matchedGenres = listGenre.filter((genre) => item.genre_ids.includes(genre.id));

        // Convert genre IDs to genre names
        const genreNames = matchedGenres.map((genre) => genre.name).join(", ");

        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{genreNames || "Unknown Genre"}</h2>
          </div>
        );
      })}


      <div>
     <Pagination data={data}/>
      </div>
    </div>
  );
}