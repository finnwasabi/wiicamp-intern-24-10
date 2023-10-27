import React from "react";

import PrimaryButton from "@/components/Buttons/PrimaryButton";

import FillLeftRightArrows from "../../Buttons/FillLeftRightArrows";
import FlashSalesSlider from "../FlashSalesSlider";

function FlashSales() {
  return (
    <div>
      <div className="container grid grid-cols-4 py-0">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Today&apos;s</div>
        </div>
      </div>
      <div className="container grid grid-cols-4 items-center py-0 mt-[24px]">
        <div className="col-span-1 text-4xl leading-[48px] font-semibold">
          Flash Sales
        </div>
        <div className="col-span-2 flex items-end">
          <div>
            <div className="font-medium text-xs">Days</div>
            <div className="font-bold text-3xl tracking-wide">03</div>
          </div>
          <div className="mx-[17px] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div className="font-medium text-xs">Hours</div>
            <div className="font-bold text-3xl tracking-wide">23</div>
          </div>
          <div className="mx-[17px] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div className="font-medium text-xs">Minutes</div>
            <div className="font-bold text-3xl tracking-wide">19</div>
          </div>
          <div className="mx-[17px] h-full">
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
            <div className="w-1 h-1 rounded-full bg-button-2 mb-2" />
          </div>
          <div>
            <div>
              <div className="font-medium text-xs">Seconds</div>
              <div className="font-bold text-3xl tracking-wide">56</div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <FillLeftRightArrows />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <FlashSalesSlider />
      </div>
      <div className="container flex justify-center py-[60px] border-b">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

export default FlashSales;
