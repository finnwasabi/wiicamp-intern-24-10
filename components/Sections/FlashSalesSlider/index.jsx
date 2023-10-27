import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/free-mode";

import FlashSalesItem from "../FlashSalesItem";

import "swiper/css";

function FlashSalesItems() {
  return (
    <div className="container py-0 mt-10">
      <Swiper
        slidesPerView={4}
        freeMode
        modules={[FreeMode, Navigation]}
        // navigation
        className="mySwiper !overflow-visible"
      >
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={1} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={2} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={3} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={4} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={4} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={3} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={2} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={1} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[270px] mr-[30px]">
          <FlashSalesItem id={3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FlashSalesItems;
