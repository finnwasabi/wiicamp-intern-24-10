import React from "react";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ThisMonthList from "@/components/Sections/ThisMonthList";

function ThisMonth() {
  return (
    <div>
      <div className="container lg:grid lg:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">This Month</div>
        </div>
        <div className="lg:hidden font-semibold text-2xl">Best Selling</div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-6 mb-[3.75rem]">
        <div className="hidden lg:flex col-span-1 text-4xl leading-[3rem] font-semibold">
          Best Selling Products
        </div>
        <div className="hidden lg:block col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute flex right-0">
              <PrimaryButton label="View All" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ThisMonthList />
      </div>
    </div>
  );
}

export default ThisMonth;
