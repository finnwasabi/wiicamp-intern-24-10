import React from "react";
import clsx from "clsx";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import AboutContacts from "@/components/Sections/AboutContacts";

import "swiper/css";
import s from "./AboutSlider.module.scss";

function AboutSlider() {
  return (
    <div className="mt-10 py-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: "#hello",
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1170: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper5 max-w-[23.125rem] md:max-w-[48.125rem] xl:max-w-full"
      >
        <SwiperSlide>
          <AboutContacts id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={5} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={6} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={7} />
        </SwiperSlide>
      </Swiper>

      <div
        className={clsx(
          s.pagination,
          "mt-10 flex w-full items-center justify-center",
        )}
        id="hello"
      />
    </div>
  );
}

export default AboutSlider;
