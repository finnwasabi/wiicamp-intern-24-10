import React from "react";
import Link from "next/link";

function TopHeader() {
  return (
    <div className="bg-black text-white">
      <div className="container py-3 relative">
        <div className="flex justify-center">
          <div className="flex flex-col text-center justify-center xl:block">
            <span className="text-sm xl:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              href="/shopnow"
              className="underline px-2 xl:font-semibold cursor-pointer"
            >
              ShopNow
            </Link>
          </div>
          <div className="flex absolute right-0 mr-3 bottom-0 xl:top1/2 -translate-y-1/2 ">
            <span className="hidden xl:block">English</span>
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
