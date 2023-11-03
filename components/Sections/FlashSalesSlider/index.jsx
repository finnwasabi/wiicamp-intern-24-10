import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import FlashSalesItem from "../FlashSalesItem";

import "swiper/css";

function FlashSalesItems() {
  return (
    <div className="container py-0 mt-10 ml-[calc(100vw/8)] xl:ml-auto md:ml-auto sm:ml-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={-80}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: -30 },
          768: { slidesPerView: 2, spaceBetween: -150 },
          1024: { slidesPerView: 3.5, spaceBetween: 0 },
          1170: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Navigation]}
        className="mySwiper xl:!overflow-visible"
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
