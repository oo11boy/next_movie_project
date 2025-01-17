import React from 'react';
import VoteImdb from './VoteImdb';
import Link from "next/link";
import SourceIcon from "@mui/icons-material/Source";
import LanguageIcon from "@mui/icons-material/Language";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import TitleIcon from "@mui/icons-material/Title";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import MovieTvCardfield from './MovieTvCardfield';
import GenreList from './GenreList';
import { ItemCardProps } from '@/Types/Types';



export default function CardContentSide({item,listGenre,type}:ItemCardProps) {
  return (
    <div className="text-white w-full sm:w-8/12 h-full">
    <div className="h-[80%] w-full">
      <VoteImdb item={item} />
      <Link className="text-xl mt-4 flow-root sm:text-left text-center w-full" href={`/` + item.id}>{type == "movie" ? item.title : item.name}</Link>
      <MovieTvCardfield  icon={<SourceIcon />} title={"Genre"}  content={<GenreList item={item} listGenre={listGenre} />} />
      <MovieTvCardfield icon={<LanguageIcon />} title={"original language"} content={item.original_language} />
      <MovieTvCardfield icon={<DateRangeIcon />} title={"release date"}  content={type == "movie" ? item.release_date : item.first_air_date}/>
      <MovieTvCardfield icon={<HighQualityIcon />} title={"quality"} content={"1080p WEB-DL"} />
      <MovieTvCardfield icon={<TitleIcon />} title={"org title"} content={type == "movie" ? item.original_title : item.original_name} />
      <MovieTvCardfield icon={<SubtitlesIcon />} title={"subtitle"} content={item.original_language} />
    </div>
    <div className="line-clamp-2 mt-4 overflow-hidden text-ellipsis">
      {item.overview}
    </div>
  </div>
  );
}
