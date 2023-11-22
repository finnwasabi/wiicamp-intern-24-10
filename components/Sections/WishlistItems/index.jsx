import React from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import AddToCart from "@/components/Buttons/AddToCart";
import FillTrash from "@/components/Buttons/FillTrash";

import useWishStore from "@/stores/wishStore";

import s from "./WishlistItems.module.scss";

function WishlistItems({ item }) {
  const wishStore = useWishStore();

  const handleRemove = (productId) => {
    wishStore.removeFromWish(productId);
    toast.warn("Removed from wishlist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className={clsx(s.Item, "block h-[21.875rem] w-[16.875rem]")}>
      <div className="relative flex h-[15.625rem] w-[16.875rem] overflow-hidden rounded bg-secondary-0">
        <AddToCart className={s.AddToCart} product={item} />
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
      <Link href={`/${item.category}/${item.productId}`}>
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
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default WishlistItems;
