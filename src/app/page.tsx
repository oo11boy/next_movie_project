import Content from "@/Components/layout/Content/Content";
import Footer from "@/Components/layout/Footer/Footer";
import Header from "@/Components/layout/Header/Header";
import SearchBox from "@/Components/layout/SearchBox/SearchBox";
import Slider from "@/Components/layout/Slider/Slider";
import { GetDataTvMovie } from "@/utils/GetDataTvMovieApi";



export default async function page() {
   const datamovietv=await GetDataTvMovie({type:"movie"});
  return (
    <>
       <Header/>
       <Slider datamovietv={datamovietv}/>
       <SearchBox/>
       <Content/>
       <Footer/>
    </>
  );
}
