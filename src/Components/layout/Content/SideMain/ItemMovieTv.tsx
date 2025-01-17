"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import GenreList from "./GenreList";
import { IGenreOutput } from "@/Types/GetGenreTypes";

interface ItemCardProps {
  item: IResultApi["results"][0];
  listGenre: IGenreOutput[];
  type: "movie" | "tv";
}

export default function ItemMovieTv({ item, listGenre, type }: ItemCardProps) {
  return (
    <div key={item.id}>
      <h2>{type == "movie" ? item.title : item.name}</h2>
      <GenreList item={item} listGenre={listGenre} />
    </div>
  );
}
