import React from "react";
import clsx from "clsx";
import Image from "next/image";

import s from "./TopSection.module.scss";

function TopSection() {
  return (
    <div className="container pt-0 mb-[140px]">
      <div className="grid grid-cols-4 grid-rows-1">
        <ul className="pt-10 pr-4 w-[234px] border-r-[0.5px] border-black border-opacity-30">
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Woman&apos;s Fashion
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Men&apos;s Fashion
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Electronics
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Home & Lifestyle
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Medicine
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Sports & Outdoor
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Baby&apos;s & Toys
          </li>
          <li className={clsx(s.TScategory, "mb-4 cursor-pointer")}>
            Groceries & Pets
          </li>
          <li className={clsx(s.TScategory, "cursor-pointer")}>
            Health & Beauty
          </li>
        </ul>
        <div className="flex flex-1 col-span-3 mt-10 relative ml-[-14px]">
          <div className="absolute flex bottom-[11px] left-1/2 -translate-x-1/2">
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 mr-3 rounded-full bg-button-2 border-white border-2" />
            <span className="h-3 w-3 mr-3 rounded-full bg-white opacity-30" />
            <span className="h-3 w-3 rounded-full bg-white opacity-30" />
          </div>
          <div className=" bg-black">
            <Image
              src="/TopSection.jpg"
              width={892}
              height={344}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
