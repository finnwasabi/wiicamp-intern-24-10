import React from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYou from "@/components/Sections/JustForYou";
import WishlistItemsList from "@/components/Sections/WishlistItemsList";

import useCartStore from "@/stores/cartStore";
import useWishStore from "@/stores/wishStore";

import "react-toastify/dist/ReactToastify.css";

function WishlistSection({ products }) {
  const cartStore = useCartStore();
  const wishStore = useWishStore();
  const moveAllToCart = () => {
    const { items: wishItems } = wishStore;
    const { items: cartItems, addToCart, increaseQuantity } = cartStore;

    if (wishItems.length === 0) {
      toast.error("Wishlist is empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    wishItems.forEach((wishItem) => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.productId === wishItem.productId,
      );

      if (existingCartItem) {
        increaseQuantity(wishItem.productId);
      } else {
        addToCart({ ...wishItem, quantity: 1 });
      }
    });

    wishStore.removeFromWishAll();

    if (wishItems.length > 0) {
      toast.success(`Moved ${wishItems.length} items to cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container mb-[8.75rem] mt-[5.9375rem]">
      <div className="mb-[3.75rem] flex items-center justify-between pt-20">
        <div className="text-xl">Wishlist ({wishStore.items.length})</div>
        <SecondaryButton label="Move All To Cart" onClick={moveAllToCart} />
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
