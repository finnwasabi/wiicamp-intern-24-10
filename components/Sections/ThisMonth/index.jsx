/* eslint-disable react/prop-types */
import React from "react";
import dynamic from "next/dynamic";

import PrimaryButton from "@/components/Buttons/PrimaryButton";

const ThisMonthList = dynamic(
  () => import("@/components/Sections/ThisMonthList"),
  {
    ssr: false,
    loading: () => (
      <p className="container flex items-center justify-center">Loading...</p>
    ),
  },
);

function ThisMonth({ products }) {
  return (
    <div>
      <div className="container flex items-center justify-between py-0 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4">
        <div className="col-span-1 flex items-center font-semibold leading-5">
          <div className="h-10 w-5 rounded bg-button-2" />
          <div className="ml-4 text-button-2">This Month</div>
        </div>
        <div className="text-2xl font-semibold md:hidden xl:hidden">
          Best Selling
        </div>
      </div>
      <div className="container mb-[3.75rem] mt-6 grid grid-cols-2 items-center py-0">
        <div className="col-span-1 hidden text-4xl font-semibold leading-[3rem] md:flex xl:flex">
          Best Selling Products
        </div>
        <div className="relative col-span-1 hidden md:block xl:block">
          <div className="right-0 flex items-center">
            <div className="absolute right-0 flex">
              <PrimaryButton label="View All" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ThisMonthList products={products} />
      </div>
    </div>
  );
}

export default ThisMonth;
