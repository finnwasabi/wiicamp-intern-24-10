import React from "react";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import TopSectionSlider from "../TopSectionSlider";

import s from "./TopSection.module.scss";

function TopSection() {
  return (
    <div className="container mb-[4rem] py-0 xl:mb-[8.75rem]">
      <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-rows-1">
        <ul className="hidden w-[14.625rem] flex-col gap-y-4 border-r-[0.0313rem] border-black border-opacity-30 pr-4 pt-10 xl:flex">
          <li>
            <Link
              href="/women's%20clothing"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Woman&apos;s Fashion
              <ChevronRight size={18} />
            </Link>
          </li>
          <li>
            <Link
              href="/men's%20clothing"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Men&apos;s Fashion
              <ChevronRight size={18} />
            </Link>
          </li>
          <li>
            <Link
              href="/electronics"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              href="/jewelery"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Jewelery
            </Link>
          </li>
          <li>
            <Link
              href="/404"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Medicine
            </Link>
          </li>
          <li>
            <Link
              href="/404"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Sports & Outdoor
            </Link>
          </li>
          <li>
            <Link
              href="/404"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Baby&apos;s & Toys
            </Link>
          </li>
          <li>
            <Link
              href="/404"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Groceries & Pets
            </Link>
          </li>
          <li>
            <Link
              href="/404"
              className={clsx(
                s.TScategory,
                "flex cursor-pointer items-center justify-between",
              )}
            >
              Health & Beauty
            </Link>
          </li>
        </ul>
        <div className="relative col-span-3 mt-10 flex flex-1 xl:ml-[-0.875rem]">
          <TopSectionSlider />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
