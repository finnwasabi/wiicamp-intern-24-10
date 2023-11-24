import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import FillLeftArrow from "@/components/Buttons/FillLeftArrow";
import FillRightArrow from "@/components/Buttons/FillRightArrow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const FlashSalesSlider = dynamic(
  () => import("@/components/Sections/FlashSalesSlider"),
  {
    ssr: false,
    loading: () => (
      <div className="container flex items-center justify-center">
        <CircularProgress color="black" size={25} />
      </div>
    ),
  },
);

function FlashSales({ products }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-12-5T07:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="container flex items-center justify-between py-0 md:grid md:grid-cols-4 xl:grid xl:grid-cols-4">
        <div className="col-span-1 flex items-center font-semibold leading-5">
          <div className="h-10 w-5 rounded bg-button-2" />
          <div className="ml-4 text-button-2">Today&apos;s</div>
        </div>
        <div className="text-2xl font-semibold md:hidden xl:hidden">
          Flash Sales
        </div>
      </div>
      <div className="container mt-[1.5rem] grid items-center py-0 md:grid-cols-4 xl:grid-cols-4">
        <div className="col-span-1 hidden text-4xl font-semibold leading-[3rem] md:flex md:text-[1.875rem] xl:flex">
          Flash Sales
        </div>
        <div className="flex items-end justify-center md:col-span-2 md:justify-center xl:col-span-2 xl:justify-start">
          <div>
            <div className="text-xs font-medium">Days</div>
            <div className="text-3xl font-bold tracking-wide">
              {timeLeft.days}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
          </div>
          <div>
            <div className="text-xs font-medium">Hours</div>
            <div className="text-3xl font-bold tracking-wide">
              {timeLeft.hours}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
          </div>
          <div>
            <div className="text-xs font-medium">Minutes</div>
            <div className="text-3xl font-bold tracking-wide">
              {timeLeft.minutes}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
            <div className="mb-2 h-1 w-1 rounded-full bg-button-2" />
          </div>
          <div>
            <div>
              <div className="text-xs font-medium">Seconds</div>
              <div className="text-3xl font-bold tracking-wide">
                {timeLeft.seconds}
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:col-span-1 xl:col-span-1">
          <div className="right-0 flex items-center">
            <div className="absolute right-0 hidden md:flex xl:flex">
              <FillLeftArrow id="prev" />
              <FillRightArrow id="next" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <FlashSalesSlider products={products} />
      </div>
      <div className="container flex justify-center border-b py-[3.75rem]">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

FlashSales.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // add other required properties here
    }),
  ).isRequired,
};

export default FlashSales;
