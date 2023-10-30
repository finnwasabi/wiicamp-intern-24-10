import React from "react";

function FillRightArrow() {
  return (
    <div className="rounded-full bg-secondary-0 w-[46px] h-[46px] relative cursor-pointer">
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 12H20M20 12L13 5M20 12L13 19"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default FillRightArrow;