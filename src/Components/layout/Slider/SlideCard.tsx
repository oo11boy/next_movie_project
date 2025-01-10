import { IResultApi } from "@/Types/GetProductTypes";

export default function SlideCard({
  datamovietv,
}: {
  datamovietv: IResultApi;
}) {
  const lastFiveItems = datamovietv.results.slice(5);
  const topmovie = lastFiveItems.filter((item) => item.vote_average > 7);

  return topmovie.map((item) => (
    <div
      key={item.id}
      className="swiper-slide"
      data-background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="inner">
        <h2>{item.title}</h2>
        <a href="#">WATCH NOW</a>
      </div>
    </div>
  ));
}
