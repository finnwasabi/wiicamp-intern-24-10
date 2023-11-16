import React from "react";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import FillTrash from "@/components/Buttons/FillTrash";

import useCartStore from "@/stores/cartStore";
import useWishStore from "@/stores/wishStore";

import s from "./WishlistItems.module.scss";

function WishlistItems({ item }) {
  const wishStore = useWishStore();
  const cartStore = useCartStore();
  const handleAddToCart = () => {
    const existingCartItem = cartStore.items.find(
      (foundItem) => foundItem.productId === item.productId,
    );
    if (existingCartItem) {
      cartStore.increaseQuantity(item.productId);
    } else {
      cartStore.addToCart({
        productId: item.productId,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }
  };
  const handleRemove = (productId) => {
    wishStore.removeFromWish(productId);
  };
  return (
    <div className={clsx(s.Item, "block h-[21.875rem] w-[16.875rem]")}>
      <div className="relative flex h-[15.625rem] w-[16.875rem] overflow-hidden rounded bg-secondary-0">
        <div className={s.AddToCart}>
          <button
            type="button"
            className="ml-auto mr-auto flex gap-x-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
        <Image
          className="absolute flex h-[15.625rem] w-[16.875rem] items-center justify-center bg-white"
          src={item.image}
          width={270}
          height={250}
          alt="Picture of item"
          priority
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
        <button type="button" onClick={() => handleRemove(item.productId)}>
          <FillTrash />
        </button>
      </div>
      <Link href={`/${item.productId}`}>
        <span className="mt-4 line-clamp-1 font-bold">{item.title}</span>
        <span className="mt-2 flex font-semibold">
          <p className="mr-3 text-secondary-2">${item.price}</p>
          {/* <div className="text-text-1 line-through">
            {WishlistItemsList[id - 1].sale}
          </div> */}
        </span>
      </Link>
    </div>
  );
}

WishlistItems.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default WishlistItems;
