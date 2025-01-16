
import { IGenreOutput } from "@/Types/GetGenreTypes";
import { IResultApi } from "@/Types/GetMovieTvTypes";

interface GenreListProps {
  item: IResultApi["results"][0];
  listGenre: IGenreOutput[];
}

export default function GenreList({ item, listGenre }: GenreListProps) {
  const matchedGenres = listGenre.filter((genre) =>
    item.genre_ids.includes(genre.id)
  );
  const genreNames = matchedGenres.map((genre) => genre.name).join(", ");

  return <h2>{genreNames || "Unknown Genre"}</h2>;
}