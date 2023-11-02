import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import FlashSalesItem from "../FlashSalesItem";

import "swiper/css";

function FlashSalesItems() {
  return (
    <div className="container py-0 mt-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        modules={[Navigation]}
        className="mySwiper !overflow-visible"
      >
        <SwiperSlide>
          <FlashSalesItem id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <FlashSalesItem id={3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FlashSalesItems;
