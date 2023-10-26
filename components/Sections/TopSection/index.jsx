import React from "react";
import Image from "next/image";

function TopSection() {
  return (
    <div className="container pt-0 mb-[140px]">
      <div className="grid gap-10 grid-cols-4 grid-rows-1">
        <ul className="col-span-1 pt-10 pr-4 border-r-[0.5px] border-black border-opacity-30">
          <li className="mb-4">Woman&apos;s Fashion</li>
          <li className="mb-4">Men&apos;s Fashion</li>
          <li className="mb-4">Electronics</li>
          <li className="mb-4">Home & Lifestyle</li>
          <li className="mb-4">Medicine</li>
          <li className="mb-4">Sports & Outdoor</li>
          <li className="mb-4">Baby&apos;s & Toys</li>
          <li className="mb-4">Groceries & Pets</li>
          <li className="">Health & Beauty</li>
        </ul>
        <div className="col-span-3 mt-10 relative">
          <div className="absolute flex bottom-[11px] left-1/2 -translate-x-1/2">
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 mr-3 rounded-full bg-button-2 border-white border-2" />
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 rounded-full bg-white opacity-30" />
          </div>
          <Image
            className="h-[344px] w-[892px] bg-black"
            src="/TopSection.jpg"
            width={892}
            height={344}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
