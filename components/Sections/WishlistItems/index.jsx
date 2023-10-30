import React from "react";
import clsx from "clsx";
import Image from "next/image";

import FillEye from "@/components/Buttons/FillEye";
import FillHeart from "@/components/Buttons/FillHeart";

import s from "./WishlistItems.module.scss";

const WishlistItemsList = [
  {
    id: 1,
    image: "/WishlistItems/Item1.png",
    name: "Gucci duffle bag",
    price: "$960",
    sale: "$1160",
  },
  {
    id: 2,
    image: "/WishlistItems/Item2.png",
    name: "RGB liquid CPU Cooler",
    price: "$1960",
    sale: " ",
  },
  {
    id: 3,
    image: "/WishlistItems/Item3.png",
    name: "GP11 Shooter USB Gamepad",
    price: "$550",
    sale: " ",
  },
  {
    id: 4,
    image: "/WishlistItems/Item4.png",
    name: "Quilted Satin Jacket",
    price: "$750",
    sale: " ",
  },
];

// eslint-disable-next-line react/prop-types
function WishlistItems({ id }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <div className={clsx(s.Item, "block w-[270px] h-[350px] cursor-pointer")}>
      <div className="w-[270px] h-[250px] rounded bg-secondary-0 flex relative overflow-hidden">
        <div className={s.AddToCart}>Add To Cart</div>
        <Image
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-h-[160px]"
          src={WishlistItemsList[id - 1].image}
          width={180}
          height={160}
          alt="Picture of item"
        />
        <FillHeart />
        <FillEye />
      </div>
      <div className="mt-4 font-bold">{WishlistItemsList[id - 1].name}</div>
      <div className="mt-2 font-semibold flex">
        <div className="text-secondary-2 mr-3">
          {WishlistItemsList[id - 1].price}
        </div>
        <div className="text-text-1 line-through">
          {WishlistItemsList[id - 1].sale}
        </div>
      </div>
    </div>
  );
}

export default WishlistItems;
