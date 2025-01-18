import { IinputApiProps, IResultApi } from "@/Types/GetMovieTvTypes";

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
    voteCountGte,
    withCast,
    withCrew,
    withPeople,
    withRuntimeGte,
    withRuntimeLte,
    withReleaseType,
    withOriginalLanguage,
    withGenres,
    withoutGenres,
    certificationCountry,
    certification,
    certificationLte,
    certificationGte,
    id,
  } = query;

  let apiUrl: string;

  if (id) {
    // اگر ID وجود دارد، جزئیات یک فیلم یا سریال خاص را دریافت می‌کنیم
    apiUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
  } else if (searchText) {
    // اگر متن جستجو وجود دارد، از endpoint جستجو استفاده می‌کنیم
    apiUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(
      searchText
    )}`;
  } else {
    // در غیر این صورت، از endpoint discover استفاده می‌کنیم
    apiUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}`;

    // اضافه کردن پارامترهای اختیاری
    if (genre) apiUrl += `&with_genres=${genre}`;
    if (yearStart)
      apiUrl += `&${
        type === "tv" ? "first_air_date" : "primary_release_date"
      }.gte=${yearStart}-01-01`;
    if (yearEnd)
      apiUrl += `&${
        type === "tv" ? "first_air_date" : "primary_release_date"
      }.lte=${yearEnd}-12-31`;
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
    if (voteCountGte) apiUrl += `&vote_count.gte=${voteCountGte}`;
    if (withCast) apiUrl += `&with_cast=${withCast}`;
    if (withCrew) apiUrl += `&with_crew=${withCrew}`;
    if (withPeople) apiUrl += `&with_people=${withPeople}`;
    if (withRuntimeGte) apiUrl += `&with_runtime.gte=${withRuntimeGte}`;
    if (withRuntimeLte) apiUrl += `&with_runtime.lte=${withRuntimeLte}`;
    if (withReleaseType) apiUrl += `&with_release_type=${withReleaseType}`;
    if (withOriginalLanguage)
      apiUrl += `&with_original_language=${withOriginalLanguage}`;
    if (withGenres) apiUrl += `&with_genres=${withGenres.join(",")}`;
    if (withoutGenres) apiUrl += `&without_genres=${withoutGenres.join(",")}`;
    if (certificationCountry)
      apiUrl += `&certification_country=${certificationCountry}`;
    if (certification) apiUrl += `&certification=${certification}`;
    if (certificationLte) apiUrl += `&certification.lte=${certificationLte}`;
    if (certificationGte) apiUrl += `&certification.gte=${certificationGte}`;
  }

  // اضافه کردن صفحه (page) به URL (به جز برای درخواست‌های بر اساس ID)
  if (!id) {
    apiUrl += `&page=${page}`;
  }

  // درخواست به API
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const data = await res.json();

  // اگر ID وجود دارد، نتیجه را به فرمت مورد نظر تبدیل می‌کنیم
  if (id) {
    return {
      total_pages: 1,
      results: [data],
      total_results: 1,
      page: 1,
    };
  }

  // در غیر این صورت، داده‌ها را به‌طور مستقیم برمی‌گردانیم
  return data;
}