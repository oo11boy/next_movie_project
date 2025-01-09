export interface IinputApiProps {
  // فیلترهای اصلی
  genre?: number; // فیلتر بر اساس ژانر
  yearStart?: number; // فیلتر بر اساس سال شروع
  yearEnd?: number; // فیلتر بر اساس سال پایان
  ratingStart?: number; // فیلتر بر اساس حداقل امتیاز
  ratingEnd?: number; // فیلتر بر اساس حداکثر امتیاز
  type?: "movie" | "tv"; // نوع محتوا (فیلم یا سریال)
  searchText?: string; // متن جستجو
  page?: number; // شماره صفحه
  // فیلترهای پشتیبانی شده توسط API
  adult?: boolean; // فیلتر محتوای بزرگسالان
  withKeywords?: string; // فیلتر بر اساس کلمات کلیدی
  withCompanies?: string; // فیلتر بر اساس شرکت‌های تولید کننده
  sortBy?: string; // فیلتر مرتب‌سازی نتایج
  original_language?: string; // فیلتر بر اساس زبان اصلی
  vote_average?: number; // فیلتر بر اساس میانگین امتیاز
  vote_count?: number; // فیلتر بر اساس تعداد امتیازها
  with_genres?: number[]; // فیلتر بر اساس ژانرها (آرایه‌ای از شناسه‌های ژانر)
  with_original_language?: string; // فیلتر بر اساس زبان اصلی
  with_original_title?: string; // فیلتر بر اساس عنوان اصلی (برای فیلم‌ها)
  with_original_name?: string; // فیلتر بر اساس نام اصلی (برای سریال‌ها)
  with_release_date?: string; // فیلتر بر اساس تاریخ انتشار (برای فیلم‌ها)
  with_first_air_date?: string; // فیلتر بر اساس تاریخ اولین پخش (برای سریال‌ها)
  id?: number; // فیلتر بر اساس شناسه (ID)
}

export interface IMovieTvOutput {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string; // برای فیلم‌ها
  original_name?: string; // برای سریال‌ها
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string; // برای فیلم‌ها
  first_air_date?: string; // برای سریال‌ها
  title?: string; // برای فیلم‌ها
  name?: string; // برای سریال‌ها
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IResultApi {
  total_pages: number;
  results: IMovieTvOutput[];
  total_results: number;
  page: number;
}
