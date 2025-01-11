import React from "react";

export default function SlideProgress() {
  return (
    <>
      <div className="slide-progress">
        <span>01</span>
        <div className="swiper-pagination swiper-pagination-progressbar">
          <span className="swiper-pagination-progressbar-fill"></span>
        </div>
        <span>05</span>
      </div>
      <div className="swiper-button-prev">PREV</div>
      <div className="swiper-button-next">NEXT</div>
    </>
  );
}
