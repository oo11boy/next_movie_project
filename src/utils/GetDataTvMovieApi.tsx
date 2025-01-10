import { IinputApiProps, IResultApi } from "@/Types/GetProductTypes";

export async function GetDataTvMovie(
  query: IinputApiProps
): Promise<IResultApi> {
  const apiKey = "3d02fe66b3c34fcde232df880586b34e";

  const {
    genre,
    yearStart,
    yearEnd,
    ratingStart,
    ratingEnd,
    type = "movie",
    searchText,
    page = 1,
    adult = false,
    withKeywords,
    withCompanies,
    sortBy,
    original_language,
    vote_average,
    vote_count,
    with_genres,
    with_original_language,
    with_original_title,
    with_original_name,
    with_release_date,
    with_first_air_date,
    id,
  } = query;

  let apiUrl: string;

  if (id) {
    apiUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
  } else if (searchText) {
    apiUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(searchText)}`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}`;

    if (genre) apiUrl += `&with_genres=${genre}`;
    if (yearStart)
      apiUrl += `&${type === "tv" ? "first_air_date" : "primary_release_date"}.gte=${yearStart}-01-01`;
    if (yearEnd)
      apiUrl += `&${type === "tv" ? "first_air_date" : "primary_release_date"}.lte=${yearEnd}-12-31`;
    if (ratingStart) apiUrl += `&vote_average.gte=${ratingStart}`;
    if (ratingEnd) apiUrl += `&vote_average.lte=${ratingEnd}`;
    if (adult !== undefined) apiUrl += `&include_adult=${adult}`;
    if (withKeywords)
      apiUrl += `&with_keywords=${encodeURIComponent(withKeywords)}`;
    if (withCompanies)
      apiUrl += `&with_companies=${encodeURIComponent(withCompanies)}`;
    if (sortBy) apiUrl += `&sort_by=${encodeURIComponent(sortBy)}`;
    if (original_language)
      apiUrl += `&with_original_language=${original_language}`;
    if (vote_average) apiUrl += `&vote_average=${vote_average}`;
    if (vote_count) apiUrl += `&vote_count=${vote_count}`;
    if (with_genres) apiUrl += `&with_genres=${with_genres.join(",")}`;
    if (with_original_language)
      apiUrl += `&with_original_language=${with_original_language}`;
    if (with_original_title)
      apiUrl += `&with_original_title=${encodeURIComponent(with_original_title)}`;
    if (with_original_name)
      apiUrl += `&with_original_name=${encodeURIComponent(with_original_name)}`;
    if (with_release_date) apiUrl += `&with_release_date=${with_release_date}`;
    if (with_first_air_date)
      apiUrl += `&with_first_air_date=${with_first_air_date}`;
  }

  if (!id && page) {
    apiUrl += `&page=${page}`;
  }

  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const data = await res.json();

  if (id) {
    return {
      total_pages: 1,
      results: [data],
      total_results: 1,
      page: 1,
    };
  }

  return data;
}
