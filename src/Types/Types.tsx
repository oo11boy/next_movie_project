import { ReactNode } from "react";
import { IResultApi } from "./GetMovieTvTypes";
import { IGenreOutput } from "./GetGenreTypes";

export interface IRootLayoutProps {
  children: ReactNode;
}

export type ISignBtnProps = {
  text: string;
  icon: React.ReactNode;
};



export interface ItemCardProps {
  item: IResultApi["results"][0];
  listGenre: IGenreOutput[];
  type: "movie" | "tv";
}

