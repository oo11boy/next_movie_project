import { PageProps } from ".next/types/app/layout";
import Content from "@/Components/layout/Content/Content";
import Footer from "@/Components/layout/Footer/Footer";
import Header from "@/Components/layout/Header/Header";
import SearchBox from "@/Components/layout/SearchBox/SearchBox";
import Slider from "@/Components/layout/Slider/Slider";
import { IinputApiProps } from "@/Types/GetMovieTvTypes";
import { GetDataTvMovie } from "@/utils/GetDataTvMovieApi";

export default async function page({
  searchParams,
}: {
  searchParams: PageProps['searchParams'] & IinputApiProps;
}) {
  const {
    genre,
    type = "movie",
    searchText,
    page,
    ratingStart,
    ratingEnd,
    yearStart,
    yearEnd,
    withOriginalLanguage,
  } = searchParams;

  const datamovietv = await GetDataTvMovie({
    type: type,
    genre: genre,
    searchText: searchText,
    page: page,
    ratingStart: ratingStart,
    ratingEnd: ratingEnd,
    yearStart: yearStart,
    yearEnd: yearEnd,
    withOriginalLanguage: withOriginalLanguage,
  });

  const datamovietvsidebar = await GetDataTvMovie({ type: "movie" });

  return (
    <>
      <Header />
      <Slider datamovietv={datamovietvsidebar} />
      <SearchBox />
      <Content data={datamovietv} type={type} />
      <Footer />
    </>
  );
}
