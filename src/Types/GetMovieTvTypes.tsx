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
   withOriginalLanguage?:string;
   // فیلترهای پشتیبانی شده توسط API
   adult?: boolean; // فیلتر محتوای بزرگسالان
   withKeywords?: string; // فیلتر بر اساس کلمات کلیدی
   withCompanies?: string; // فیلتر بر اساس شرکت‌های تولید کننده
   sortBy?: string; // فیلتر مرتب‌سازی نتایج
   original_language?: string; // فیلتر بر اساس زبان اصلی
   voteCountGte?: number; // فیلتر بر اساس حداقل تعداد امتیازها
   withCast?: string; // فیلتر بر اساس بازیگران (شناسه‌های بازیگران)
   withCrew?: string; // فیلتر بر اساس عوامل فیلم (شناسه‌های عوامل)
   withPeople?: string; // فیلتر بر اساس افراد (شناسه‌های افراد)
   withRuntimeGte?: number; // فیلتر بر اساس حداقل زمان اجرا
   withRuntimeLte?: number; // فیلتر بر اساس حداکثر زمان اجرا
   withReleaseType?: number; // فیلتر بر اساس نوع انتشار
   withGenres?: number[]; // فیلتر بر اساس ژانرها (آرایه‌ای از شناسه‌های ژانر)
   withoutGenres?: number[]; // فیلتر برای حذف ژانرها (آرایه‌ای از شناسه‌های ژانر)
   certificationCountry?: string; // کشور مورد نظر برای فیلتر رده‌بندی سنی
   certification?: string; // رده‌بندی سنی مورد نظر
   certificationLte?: string; // رده‌بندی سنی حداکثر
   certificationGte?: string; // رده‌بندی سنی حداقل
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
