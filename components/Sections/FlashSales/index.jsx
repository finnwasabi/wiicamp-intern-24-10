import React, { useEffect, useState } from "react";

import FillLeftArrow from "@/components/Buttons/FillLeftArrow";
import FillRightArrow from "@/components/Buttons/FillRightArrow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import FlashSalesSlider from "@/components/Sections/FlashSalesSlider";

function FlashSales() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-11-12T07:00:00`) - +new Date();
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
      <div className="container md:grid md:grid-cols-4 xl:grid xl:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Today&apos;s</div>
        </div>
        <div className="md:hidden xl:hidden font-semibold text-2xl">
          Flash Sales
        </div>
      </div>
      <div className="container grid md:grid-cols-4 xl:grid-cols-4 items-center py-0 mt-[1.5rem]">
        <div className="hidden md:flex xl:flex col-span-1 md:text-[1.875rem] text-4xl leading-[3rem] font-semibold">
          Flash Sales
        </div>
        <div className="md:col-span-2 md:justify-center xl:col-span-2 xl:justify-start items-end flex justify-center">
          <div>
            <div className="font-medium text-xs">Days</div>
            <div className="font-bold text-3xl tracking-wide">
              {timeLeft.days}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div className="font-medium text-xs">Hours</div>
            <div className="font-bold text-3xl tracking-wide">
              {timeLeft.hours}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div className="font-medium text-xs">Minutes</div>
            <div className="font-bold text-3xl tracking-wide">
              {timeLeft.minutes}
            </div>
          </div>
          <div className="mx-[1.0625rem] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div>
              <div className="font-medium text-xs">Seconds</div>
              <div className="font-bold text-3xl tracking-wide">
                {timeLeft.seconds}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 xl:col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute hidden md:flex xl:flex right-0">
              <FillLeftArrow id="prev" />
              <FillRightArrow id="next" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <FlashSalesSlider />
      </div>
      <div className="container flex justify-center py-[3.75rem] border-b">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

export default FlashSales;
