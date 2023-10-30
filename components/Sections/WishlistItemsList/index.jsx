import React from "react";

import WishlistItems from "@/components/Sections/WishlistItems";

function WishlistItemsList() {
  return (
    <div className="flex justify-between mb-20">
      <WishlistItems id={1} />
      <WishlistItems id={2} />
      <WishlistItems id={3} />
      <WishlistItems id={4} />
    </div>
  );
}

export default WishlistItemsList;
