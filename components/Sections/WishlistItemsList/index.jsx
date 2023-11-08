import React from "react";

import WishlistItems from "@/components/Sections/WishlistItems";

function WishlistItemsList() {
  return (
    <div className="mb-20 flex flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:flex xl:flex-row">
      <WishlistItems id={1} />
      <WishlistItems id={2} />
      <WishlistItems id={3} />
      <WishlistItems id={4} />
    </div>
  );
}

export default WishlistItemsList;
