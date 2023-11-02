import React from "react";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

import TopSectionSlider from "../TopSectionSlider";

import s from "./TopSection.module.scss";

function TopSection() {
  return (
    <div className="container py-0 mb-[8.75rem]">
      <div className="grid grid-cols-4 grid-rows-1">
        <ul className="flex flex-col gap-y-4 pt-10 pr-4 w-[14.625rem] border-r-[0.0313rem] border-black border-opacity-30">
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Woman&apos;s Fashion
            <ChevronRight size={18} />
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Men&apos;s Fashion
            <ChevronRight size={18} />
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Electronics
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Home & Lifestyle
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Medicine
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Sports & Outdoor
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Baby&apos;s & Toys
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Groceries & Pets
          </li>
          <li
            className={clsx(
              s.TScategory,
              "cursor-pointer flex justify-between items-center",
            )}
          >
            Health & Beauty
          </li>
        </ul>
        <div className="flex flex-1 col-span-3 mt-10 relative ml-[-0.875rem]">
          <TopSectionSlider />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
