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
          className="fixed bottom-5 right-[90px] z-10"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="rounded-full bg-secondary-0 mr-2 w-[46px] h-[46px] relative cursor-pointer shadow-xl">
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
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

// return (
//   <button
//     className="fixed bottom-5 right-[90px] z-10"
//     onClick={() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }}
//   >
//     <div className="rounded-full bg-secondary-0 mr-2 w-[46px] h-[46px] relative cursor-pointer shadow-xl">
//       <svg
//         className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M12 20V4M5 11L12 4L19 11"
//           stroke="black"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   </button>
// );

export default FillUpArrow;