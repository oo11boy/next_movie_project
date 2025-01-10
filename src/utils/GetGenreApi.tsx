import { IGenreInput, IGenreOutput } from "@/Types/GetGenreTypes";


export async function GetGenres(query: IGenreInput): Promise<IGenreOutput[]> {
  const {  type } = query;
  const apiKey = "3d02fe66b3c34fcde232df880586b34e";

  // ساخت URL بر اساس نوع محتوا
  const apiUrl = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}`;

  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch genres: ${res.statusText}`);
  }

  const data = await res.json();
  const genres = data.genres;
return genres;
}
