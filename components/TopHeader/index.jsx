import React from "react";
import { Poppins } from "next/font/google";
import styles from "./TopHeader.module.scss";

function TopHeader() {
  return (
    <div className="bg-black text-white">
      <div className="container relative">
        <div className="flex justify-center">
          <div>
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <a className="underline px-2 font-semibold" href="#">
              ShopNow
            </a>
          </div>
          <div className="flex absolute right-0">
            English
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
