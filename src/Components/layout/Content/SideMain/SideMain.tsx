"use client";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { GetGenres } from "@/utils/GetGenreApi";
import { useSearchParams } from "next/navigation";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import ItemMovieTv from "./ItemMovieTv";


interface SideMainProps {
  data: IResultApi;
  type: "movie" | "tv";
}

export default function SideMain({ data, type }: SideMainProps) {
  const [listGenre, setListGenre] = useState<IGenreOutput[]>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    const fetchGenre = async () => {
      const data = await GetGenres({ type: type });
      setListGenre(data);
    };
    fetchGenre();
  }, [type]);

  useEffect(() => {
    const sidemainElement = document.getElementById("sidemain");
    if (page && sidemainElement) {
      sidemainElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <div id="sidemain" className="bg-[green] w-full lg:w-9/12">
      {data.results.map((item) => (
        <ItemMovieTv key={item.id} item={item} listGenre={listGenre} />
      ))}
      <div>
        <Pagination data={data} />
      </div>
    </div>
  );
}