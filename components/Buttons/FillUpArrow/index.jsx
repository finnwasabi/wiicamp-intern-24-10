/* eslint-disable react/button-has-type */
import { React, useEffect, useState } from "react";

function FillUpArrow() {
  // set the button hidden when on top of the page
  const [isButtonVisible, setButtonVisible] = useState(true);

  // set the button hidden when on top of the page
  useEffect(() => {
    const handleScroll = () => {
      const isOnTop = window.scrollY === 0;
      setButtonVisible(!isOnTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isButtonVisible && (
        <button
          className="fixed bottom-10 right-5 z-10 xl:bottom-5 xl:right-[5.625rem]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative mr-2 h-[2.875rem] w-[2.875rem] cursor-pointer rounded-full bg-secondary-0 shadow-xl">
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20V4M5 11L12 4L19 11"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}

export default FillUpArrow;
