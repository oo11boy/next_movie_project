import { useSearchBox } from "@/ContextApi/SearchBoxContext";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import { GetDataTvMovie } from "@/utils/GetDataTvMovieApi";
import React, { useEffect, useState } from "react";

export default function SideMain({ datamovietv }: { datamovietv: IResultApi }) {
  const [DataMovieTv, setDataMovieTv] = useState<IResultApi>(datamovietv);
  const { searchArray } = useSearchBox();

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await GetDataTvMovie(searchArray);
      setDataMovieTv(data || []);
    };
    fetchGenres();
  }, [searchArray]);

  return (
    <div className="bg-[green] w-full lg:w-9/12">
      {DataMovieTv.results.map((item) => (
        <>
        <h2>{item.title}</h2>
    <h2>{item.genre_ids.map((item)=>(item==searchArray.genre ))}</h2>
    </>
      ))};
    </div>
  );
}
