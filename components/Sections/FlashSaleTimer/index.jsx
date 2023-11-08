import React, { useEffect, useState } from "react";

function FlashSaleTimer() {
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
    <div className="flex sm:gap-x-3 md:gap-x-3 xl:gap-x-6">
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-white">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem]">
            {timeLeft.hours}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem]">
            Hours
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-white">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem]">
            {timeLeft.days}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem]">
            Days
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-white">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem]">
            {timeLeft.minutes}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem]">
            Minutes
          </div>
        </div>
      </div>
      <div className="flex max-h-[3.875rem] w-[3.875rem] justify-center rounded-full bg-white">
        <div className="py-[0.875rem]">
          <div className="flex justify-center font-semibold leading-[1.25rem]">
            {timeLeft.seconds}
          </div>
          <div className="flex justify-center text-xs leading-[1.125rem]">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleTimer;
