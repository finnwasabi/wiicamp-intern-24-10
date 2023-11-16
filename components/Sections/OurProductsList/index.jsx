/* eslint-disable react/prop-types */
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import OurProductsItem from "../OurProductsItem";

function OurProductsList({ products }) {
  const generateSlides = (items) => {
    const slides = [];
    const totalProducts = items.length;
    let startIndex = 0;
    while (startIndex < totalProducts) {
      const endIndex = Math.min(startIndex + 8, totalProducts);
      const slideProducts = items.slice(startIndex, endIndex);
      slides.push(
        <SwiperSlide key={`slide-${startIndex}`}>
          <div className="container grid w-full grid-cols-1 flex-row place-items-center justify-between gap-x-[1.875rem] gap-y-[3.75rem] pt-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {slideProducts.map((product) => (
              <OurProductsItem key={product.id} product={product} />
            ))}
          </div>
        </SwiperSlide>,
      );
      startIndex += 8;
    }
    return slides;
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={{
        prevEl: "#prev3",
        nextEl: "#next3",
      }}
      modules={[Navigation]}
      className="mySwiper5"
    >
      {generateSlides(products)}
    </Swiper>
  );
}

export default OurProductsList;
