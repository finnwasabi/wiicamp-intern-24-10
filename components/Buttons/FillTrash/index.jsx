import React from "react";

function FillTrash() {
  return (
    <div className="absolute flex top-3 right-3 cursor-pointer">
      <div className="rounded-full bg-white w-[34px] h-[34px] relative">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
            stroke="black"
            strokeWidth="1.56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default FillTrash;
