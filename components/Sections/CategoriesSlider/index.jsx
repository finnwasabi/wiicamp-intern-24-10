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
          disabledClass: "hover:shadow-none opacity-50",
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
        modules={[Navigation]}
        className="mySwiper6"
      >
        <SwiperSlide>
          <CategoryButtons id={1} category="women's%20clothing" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={2} category="electronics" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={3} category="men's%20clothing" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={4} category="jewelery" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={5} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={6} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={7} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={8} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={9} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={10} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={11} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={12} category="404" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryButtons id={13} category="404" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
