import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import CategoryButtons from "@/components/Buttons/CategoryButtons";

import "swiper/css";

function CategoriesSlider() {
  return (
    <div className="container mb-[4.375rem] flex border-b pb-[4.375rem]">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          prevEl: "#prev1",
          nextEl: "#next1",
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 3.75, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
          1170: { slidesPerView: 6, spaceBetween: 30 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryButtons id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={5} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={6} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={7} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={8} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={9} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
