import React from "react";
import PropTypes from "prop-types";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYou from "@/components/Sections/JustForYou";
import WishlistItemsList from "@/components/Sections/WishlistItemsList";

import useWishStore from "@/stores/wishStore";

function WishlistSection({ products }) {
  const wishStore = useWishStore();
  const { items } = wishStore;
  return (
    <div className="container mb-[8.75rem]">
      <div className="mb-[3.75rem] flex items-center justify-between pt-20">
        <div className="text-xl">Wishlist ({items.length})</div>
        <SecondaryButton label="Move All To Cart" />
      </div>
      <WishlistItemsList />
      <JustForYou products={products} />
    </div>
  );
}

WishlistSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WishlistSection;
