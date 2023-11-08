import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import FlashSalesItem from "../FlashSalesItem";

import "swiper/css";

function FlashSalesItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(("Error fetching data from API", error));
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container ml-[calc(100vw/8)] mt-10 py-0 sm:ml-auto md:ml-auto xl:ml-auto">
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <FlashSalesItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FlashSalesItems;
