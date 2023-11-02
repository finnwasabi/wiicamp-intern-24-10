import React from "react";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYou from "@/components/Sections/JustForYou";
import WishlistItemsList from "@/components/Sections/WishlistItemsList";

function WishlistSection() {
  return (
    <div className="container mt-20 mb-[8.75rem]">
      <div className="mb-[3.75rem] flex justify-between items-center">
        <div className="text-xl">Wishlist(4)</div>
        <SecondaryButton label="Move All To Bag" />
      </div>
      <WishlistItemsList />
      <JustForYou />
    </div>
  );
}

export default WishlistSection;
