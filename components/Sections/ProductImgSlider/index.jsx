import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css";

function ProductImgSlider({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container max-w-[600px] flex-col">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        // breakpoints={{
        //   640: { slidesPerView: 2, spaceBetween: -30 },
        //   768: { slidesPerView: 2, spaceBetween: -150 },
        //   1024: { slidesPerView: 3.5, spaceBetween: 30 },
        //   1280: { slidesPerView: 4, spaceBetween: 30 },
        // }}
        style={{
          "--swiper-navigation-color": "#DB4444",
          "--swiper-pagination-color": "#DB4444",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the cl"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt="Picture of the cl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt="Picture of the cl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

ProductImgSlider.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductImgSlider;
