import React from "react";

function TopHeader() {
  return (
    <div className="bg-black text-white">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="flex flex-col text-center justify-center lg:block">
            <span className="text-sm lg:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="underline px-2 lg:font-semibold cursor-pointer">
              ShopNow
            </span>
          </div>
          <div className="flex absolute right-0 mr-3 bottom-0 lg:top1/2 -translate-y-1/2 ">
            <span className="hidden lg:block">English</span>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
