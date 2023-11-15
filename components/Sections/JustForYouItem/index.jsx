import React from "react";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import DiscountPercent from "../../Buttons/DiscountPercent";

// import FillEye from "../../Buttons/FillEye";
import s from "./JustForYou.module.scss";

const JustForYouItemsList = [
  {
    id: 1,
    image: "/JustForYou/Item1.png",
    name: "ASUS FHD Gaming Laptop",
    percent: "-35%",
    price: "$960",
    sale: "$1160",
    reviews: "65",
    stars: 5,
  },
  {
    id: 2,
    image: "/JustForYou/Item2.png",
    name: "IPS LCD Gaming Monitor",
    percent: "-35%",
    price: "$1160",
    sale: "",
    reviews: "65",
    stars: 5,
  },
  {
    id: 3,
    image: "/JustForYou/Item3.png",
    name: "HAVIT HV-G92 Gamepad",
    percent: "-30%",
    price: "$560",
    sale: "",
    reviews: "65",
    stars: 5,
  },
  {
    id: 4,
    image: "/JustForYou/Item4.png",
    name: "AK-900 Wired Keyboard",
    percent: "-25%",
    price: "$200",
    sale: "",
    reviews: "65",
    stars: 5,
  },
];

const renderStars = (rating) => {
  const starsArray = [];
  const filledStars = Math.floor(rating);
  for (let i = 0; i < filledStars; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="#FFAD33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  for (let i = filledStars; i < 5; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="#D1D5DB"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  return <div style={{ display: "flex" }}>{starsArray}</div>;
};

// eslint-disable-next-line react/prop-types
function JustForYouItem({ id }) {
  return (
    <Link
      href="/occho"
      className={clsx(
        s.Item,
        "block h-[21.875rem] w-[16.875rem] cursor-pointer overflow-hidden",
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
          src={JustForYouItemsList[id - 1].image}
          width={270}
          height={250}
          alt="Picture of item"
        />
        <DiscountPercent label={JustForYouItemsList[id - 1].percent} />
        <div className="absolute right-3 top-3 flex cursor-pointer">
          {/* <FillEye /> */}
        </div>
      </div>
      <div className="mt-4 font-bold">{JustForYouItemsList[id - 1].name}</div>
      <div className="mt-2 flex font-semibold">
        <div className="mr-3 text-secondary-2">
          {JustForYouItemsList[id - 1].price}
        </div>
        <div className="text-text-1 line-through">
          {JustForYouItemsList[id - 1].sale}
        </div>
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="mr-2">
          {renderStars(JustForYouItemsList[id - 1].stars)}
        </div>
        <div className="text-sm font-semibold text-text-1">
          ({JustForYouItemsList[id - 1].reviews})
        </div>
      </div>
    </Link>
  );
}

export default JustForYouItem;
