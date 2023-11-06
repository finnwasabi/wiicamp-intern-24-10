import React from "react";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import FillTrash from "@/components/Buttons/FillTrash";

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
    <div
      className={clsx(
        s.Item,
        "block w-[16.875rem] h-[21.875rem] cursor-pointer",
      )}
    >
      <div className="w-[16.875rem] h-[15.625rem] rounded bg-secondary-0 flex relative overflow-hidden">
        <div className={s.AddToCart}>
          <div className="flex justify-center items-center gap-x-2">
            <ShoppingCart /> Add To Cart
          </div>
        </div>
        <Image
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          src={WishlistItemsList[id - 1].image}
          width={270}
          height={250}
          alt="Picture of item"
          priority
        />
        <FillTrash />
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
