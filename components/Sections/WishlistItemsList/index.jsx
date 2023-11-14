import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import WishlistItems from "@/components/Sections/WishlistItems";

import useWishStore from "@/stores/wishStore";

import "swiper/css";

function WishlistItemsList() {
  const wishStore = useWishStore();
  const { items } = wishStore;
  return (
    <div>
      {items.length > 0 && (
        <Swiper
          slidesPerView={1.25}
          spaceBetween={10}
          breakpoints={{
            450: { slidesPerView: 1.5, spaceBetween: 30 },
            640: { slidesPerView: 2, spaceBetween: 60 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[]}
          className="mb-20 flex flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:flex xl:flex-row"
        >
          {items.map((item) => (
            <SwiperSlide key={item.productId}>
              <WishlistItems item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {items.length === 0 && (
        <div className="mb-20 flex items-center justify-center text-text-1">
          There are no items
        </div>
      )}
    </div>
  );
}

export default WishlistItemsList;
