"use client";
import { IResultApi } from "@/Types/GetMovieTvTypes";
import GenreList from "./GenreList";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import Link from "next/link";
import PreviewIcon from "@mui/icons-material/Preview";
import SourceIcon from "@mui/icons-material/Source";
import MovieTvCardfield from "./MovieTvCardfield";
import LanguageIcon from "@mui/icons-material/Language";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import TitleIcon from "@mui/icons-material/Title";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import VoteImdb from "./VoteImdb";
interface ItemCardProps {
  item: IResultApi["results"][0];
  listGenre: IGenreOutput[];
  type: "movie" | "tv";
}

export default function ItemMovieTv({ item, listGenre, type }: ItemCardProps) {
  return (
    <div className="flex w-full relative justify-start h-[400px] p-4 bg-[#242424] mb-4">
      <div className="w-4/12 flex flex-col items-start justify-center">
        <img
          className="w-9/12 h-[300px] object-cover rounded-lg mb-4"
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt=""
        />

        <Link
          className="w-9/12 h-[80px] overflow-hidden rounded-md flex items-center group"
          href={`/` + item.id}
        >
          <span className="text-white bg-[#2D2D2D] w-full h-full flex items-center justify-center group-hover:text-orange-500 transition-colors duration-300">
            view more
          </span>
          <span className="relative text-orange-500 w-full h-full flex items-center justify-center group-hover:text-white transition-colors duration-300">
            <div className="absolute inset-[-5px]  bg-[#1a1a1a] transform skew-x-12 group-hover:bg-orange-500 transition-colors duration-300"></div>
            <PreviewIcon className="relative z-10" />
          </span>
        </Link>
      </div>
      <div className="text-white w-8/12 h-full">
        <div className="h-[80%]">
          <Link className="text-xl" href={`/` + item.id}>
            {type == "movie" ? item.title : item.name}
          </Link>

          <MovieTvCardfield
            icon={<SourceIcon />}
            title={"Genre"}
            content={<GenreList item={item} listGenre={listGenre} />}
          />
          <MovieTvCardfield
            icon={<LanguageIcon />}
            title={"original language"}
            content={item.original_language}
          />
          <MovieTvCardfield
            icon={<DateRangeIcon />}
            title={"release date"}
            content={type=="movie" ? item.release_date :item.first_air_date}
          />
          <MovieTvCardfield
            icon={<HighQualityIcon />}
            title={"quality"}
            content={"1080p WEB-DL"}
          />
          <MovieTvCardfield
            icon={<TitleIcon />}
            title={"org title"}
            content={type == "movie" ? item.original_title : item.original_name}
          />
          <MovieTvCardfield
            icon={<SubtitlesIcon />}
            title={"subtitle"}
            content={item.original_language}
          />
        </div>
        <div className="line-clamp-2 mt-4 overflow-hidden text-ellipsis">
          {item.overview}
        </div>
      </div>

      <VoteImdb item={item} />
    </div>
  );
}
