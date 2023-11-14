import React from "react";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYou from "@/components/Sections/JustForYou";
import WishlistItemsList from "@/components/Sections/WishlistItemsList";

import useWishStore from "@/stores/wishStore";

function WishlistSection() {
  const wishStore = useWishStore();
  const { items } = wishStore;
  return (
    <div className="container mb-[8.75rem]">
      <div className="mb-[3.75rem] flex items-center justify-between pt-20">
        <div className="text-xl">Wishlist ({items.length})</div>
        <SecondaryButton label="Move All To Bag" />
      </div>
      <WishlistItemsList />
      <JustForYou />
    </div>
  );
}

export default WishlistSection;
