"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Slider.css";
import SlideCard from "./SlideCard";
import SlideProgress from "./SlideProgress";
import { IResultApi } from "@/Types/GetMovieTvTypes";

const Slider = ({ datamovietv }: { datamovietv: IResultApi }) => {

  useEffect(() => {
    const carouselslider = new Swiper(".carousel-slider", {
      spaceBetween: 0,
      slidesPerView: 3,
      modules: [Navigation, Pagination, Autoplay],
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });

    return () => {
      if (carouselslider) carouselslider.destroy(); 
    };
  }, []);

  return (
    <section className="creative-carousal--hero">
      <div className="carousel-slider swiper-container">
        <div className="swiper-wrapper">
          <SlideCard datamovietv={datamovietv} />
        </div>
        <SlideProgress />
      </div>
    </section>
  );
};

export default Slider;
