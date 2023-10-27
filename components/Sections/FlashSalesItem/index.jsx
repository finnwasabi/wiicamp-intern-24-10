import React from "react";
import clsx from "clsx";
import Image from "next/image";

import DiscountPercent from "../../Buttons/DiscountPercent";
import FillEye from "../../Buttons/FillEye";
import FillHeart from "../../Buttons/FillHeart";

import s from "./FlashSalesItem.module.scss";

const FlashSalesItemsList = [
  {
    id: 1,
    image: "/FlashSalesItem/Item1.png",
    name: "HAVIT HV-G92 Gamepad",
    percent: "-40%",
    price: "$160",
    sale: "$120",
    reviews: "88",
    stars: 5,
  },
  {
    id: 2,
    image: "/FlashSalesItem/Item2.png",
    name: "AK-900 Wired Keyboard",
    percent: "-35%",
    price: "$1160",
    sale: "$960",
    reviews: "75",
    stars: 4,
  },
  {
    id: 3,
    image: "/FlashSalesItem/Item3.png",
    name: "IPS LCD Gaming Monitor",
    percent: "-30%",
    price: "$400",
    sale: "$370",
    reviews: "99",
    stars: 5,
  },
  {
    id: 4,
    image: "/FlashSalesItem/Item4.png",
    name: "S-Series Comfort Chair",
    percent: "-25%",
    price: "$400",
    sale: "$375",
    reviews: "99",
    stars: 4.5,
  },
];

// Function to generate stars in a row
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
        {/* Path for filled star */}
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  // Adding greyed out stars for the remaining unfilled stars
  for (let i = filledStars; i < 5; i += 1) {
    starsArray.push(
      <svg
        key={`star-${i}`}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="#D1D5DB" // Grey color
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Path for empty star */}
        <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
      </svg>,
    );
  }
  return <div style={{ display: "flex" }}>{starsArray}</div>;
};

// eslint-disable-next-line react/prop-types
function FlashSalesItem({ id }) {
  return (
    <div
      className={clsx(
        s.SaleItem,
        "overflow-hidden block w-[270px] h-[350px] cursor-pointer",
      )}
    >
      <div className="w-[270px] h-[250px] rounded bg-secondary-0 flex relative overflow-hidden">
        <div className={s.AddToCart}>Add To Cart</div>
        <Image
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-h-[160px]"
          src={FlashSalesItemsList[id - 1].image}
          width={180}
          height={160}
          alt="Picture of item"
        />
        <DiscountPercent label={FlashSalesItemsList[id - 1].percent} />
        <FillHeart />
        <FillEye />
      </div>
      <div className="mt-4 font-bold">{FlashSalesItemsList[id - 1].name}</div>
      <div className="mt-2 font-semibold flex">
        <div className="text-secondary-2 mr-3">
          {FlashSalesItemsList[id - 1].price}
        </div>
        <div className="text-text-1 line-through">
          {FlashSalesItemsList[id - 1].sale}
        </div>
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="mr-2">
          {renderStars(FlashSalesItemsList[id - 1].stars)}
        </div>
        <div className="font-semibold text-sm text-text-1">
          ({FlashSalesItemsList[id - 1].reviews})
        </div>
      </div>
    </div>
  );
}

export default FlashSalesItem;
