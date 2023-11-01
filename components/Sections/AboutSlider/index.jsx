import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import AboutContacts from "@/components/Sections/AboutContacts";

import "swiper/css";

function AboutSlider() {
  return (
    <div className="py-0 mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: "#hello",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
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
          <AboutContacts id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutContacts id={3} />
        </SwiperSlide>
      </Swiper>

      <div
        className="mt-10 w-full flex justify-center items-center"
        id="hello"
      />
    </div>
  );
}

export default AboutSlider;
