import React from "react";
import Link from "next/link";

function TopHeader() {
  return (
    <div className="bg-black text-white">
      <div className="container relative py-3">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-center xl:block">
            <span className="text-sm xl:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              href="/shopnow"
              className="cursor-pointer px-2 underline xl:font-semibold"
            >
              ShopNow
            </Link>
          </div>
          <div className="xl:top1/2 absolute bottom-0 right-0 mr-3 flex -translate-y-1/2 ">
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
