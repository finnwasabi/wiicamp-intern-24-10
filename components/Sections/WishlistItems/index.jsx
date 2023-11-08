import React from "react";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href="/occho"
      className={clsx(
        s.Item,
        "block h-[21.875rem] w-[16.875rem] cursor-pointer",
      )}
    >
      <div className="relative flex h-[15.625rem] w-[16.875rem] overflow-hidden rounded bg-secondary-0">
        <div className={s.AddToCart}>
          <div className="flex items-center justify-center gap-x-2">
            <ShoppingCart /> Add To Cart
          </div>
        </div>
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={WishlistItemsList[id - 1].image}
          width={270}
          height={250}
          alt="Picture of item"
          priority
        />
        <FillTrash />
      </div>
      <div className="mt-4 font-bold">{WishlistItemsList[id - 1].name}</div>
      <div className="mt-2 flex font-semibold">
        <div className="mr-3 text-secondary-2">
          {WishlistItemsList[id - 1].price}
        </div>
        <div className="text-text-1 line-through">
          {WishlistItemsList[id - 1].sale}
        </div>
      </div>
    </Link>
  );
}

export default WishlistItems;
