import React from "react";
import { Poppins } from "next/font/google";

function Header() {
  return (
    <div className=" pb-4 border-b border-black border-opacity-30">
      <div className="container mt-10">
        <div className="flex h-[38px] justify-between items-center">
          <span className="mr-12 font-bold text-2xl leading-6">Exclusive</span>
          <div>
            <span className="mr-12 border-b border-black border-opacity-30">
              Home
            </span>
            <span className="mr-12">Contact</span>
            <span className="mr-12">About</span>
            <span>Sign up</span>
          </div>
          <div>
            <input
              className="font-normal text-xs py-[20px] px-[7px] h-6 w-[211px] bg-secondary-0 rounded"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
