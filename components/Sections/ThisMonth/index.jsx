import React from "react";
import ViewAll from "@/components/Buttons/ViewAll";

function ThisMonth() {
  return (
    <div>
      <div className="container grid grid-cols-4 py-0">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded"></div>
          <div className="text-button-2 ml-4">This Month</div>
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[24px] mb-[60px]">
        <div className="col-span-1 text-4xl leading-[48px] font-semibold">
          Best Selling Products
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <ViewAll />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisMonth;
