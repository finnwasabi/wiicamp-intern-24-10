import React from "react";

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
        <div className="mb-[8.75rem] grid w-full grid-cols-1 flex-row place-items-center justify-between gap-x-[1.875rem] gap-y-[3.75rem] pt-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <WishlistItems key={item.id} item={item} />
          ))}
        </div>
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
