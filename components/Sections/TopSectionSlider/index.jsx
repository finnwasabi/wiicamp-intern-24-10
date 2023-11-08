import React from "react";
import clsx from "clsx";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import TopSectionImg from "../TopSectionImg";

import "swiper/css";
import s from "./TopSectionSlider.module.scss";

function TopSectionSlider() {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: "#customPagination",
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <div
        id="customPagination"
        className={clsx(
          s.pagination,
          "swiper-pagination mb-1 flex items-center justify-center",
        )}
      />
      <SwiperSlide>
        <TopSectionImg id={1} />
      </SwiperSlide>
      <SwiperSlide>
        <TopSectionImg id={2} />
      </SwiperSlide>
      <SwiperSlide>
        <TopSectionImg id={3} />
      </SwiperSlide>
      <SwiperSlide>
        <TopSectionImg id={4} />
      </SwiperSlide>
      <SwiperSlide>
        <TopSectionImg id={5} />
      </SwiperSlide>
    </Swiper>
  );
}

export default TopSectionSlider;
