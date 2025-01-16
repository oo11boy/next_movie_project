"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import GenreList from "./GenreList";
import { IGenreOutput } from "@/Types/GetGenreTypes";

interface ItemCardProps {
  item: IResultApi["results"][0];
  listGenre: IGenreOutput[];
}

export default function ItemMovieTv({ item, listGenre }: ItemCardProps) {
  return (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <GenreList item={item} listGenre={listGenre} />
    </div>
  );
}