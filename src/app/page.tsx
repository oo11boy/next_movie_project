import Content from "@/Components/layout/Content/Content";
import Footer from "@/Components/layout/Footer/Footer";
import Header from "@/Components/layout/Header/Header";
import SearchBox from "@/Components/layout/SearchBox/SearchBox";
import Slider from "@/Components/layout/Slider/Slider";



export default function page() {
  return (
    <div>
       <Header/>
       <Slider/>
       <SearchBox/>
       <Content/>
       <Footer/>
    </div>
  )
}
