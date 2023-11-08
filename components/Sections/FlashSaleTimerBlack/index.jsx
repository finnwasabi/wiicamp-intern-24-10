import React, { useEffect, useState } from "react";

function FlashSaleTimerBlack() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-12-24T07:00:00`) - +new Date();
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
    <div className="mb-3 flex justify-center gap-x-6 sm:mb-3 sm:mt-10 md:mt-10">
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-black">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem] text-white">
            {timeLeft.hours}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem] text-white">
            Hours
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-black">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem] text-white">
            {timeLeft.days}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem] text-white">
            Days
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-black">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem] text-white">
            {timeLeft.minutes}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem] text-white">
            Minutes
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-black">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem] text-white">
            {timeLeft.seconds}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem] text-white">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleTimerBlack;
