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
    <div className="flex gap-x-6">
      <div className="flex rounded-full bg-white w-[3.875rem] max-h-[3.875rem] justify-center">
        <div className="py-[0.875rem]">
          <div className="flex font-semibold leading-[1.25rem] justify-center">
            {timeLeft.hours}
          </div>
          <div className="flex text-xs leading-[1.125rem] justify-center">
            Hours
          </div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[3.875rem] max-h-[3.875rem] justify-center">
        <div className="py-[0.875rem]">
          <div className="flex font-semibold leading-[1.25rem] justify-center">
            {timeLeft.days}
          </div>
          <div className="flex text-xs leading-[1.125rem] justify-center">
            Days
          </div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[3.875rem] max-h-[3.875rem] justify-center">
        <div className="py-[0.875rem]">
          <div className="flex font-semibold leading-[1.25rem] justify-center">
            {timeLeft.minutes}
          </div>
          <div className="flex text-xs leading-[1.125rem] justify-center">
            Minutes
          </div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[3.875rem] max-h-[3.875rem] justify-center">
        <div className="py-[0.875rem]">
          <div className="flex font-semibold leading-[1.25rem] justify-center">
            {timeLeft.seconds}
          </div>
          <div className="flex text-xs leading-[1.125rem] justify-center">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleTimer;
