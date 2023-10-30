import React from "react";

import FillLeftArrow from "@/components/Buttons/FillLeftArrow";
import FillRightArrow from "@/components/Buttons/FillRightArrow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import OurProductsList from "@/components/Sections/OurProductsList";

function OurProducts() {
  return (
    <div>
      <div className="container grid grid-cols-4 py-0">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Our Products</div>
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[24px] mb-[60px]">
        <div className="col-span-1 text-4xl leading-[48px] font-semibold">
          Explore Our Products
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute flex right-0">
              <FillLeftArrow />
              <FillRightArrow />
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurProductsList />
      </div>
      <div className="container flex justify-center pt-0 pb-[140px]">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

export default OurProducts;
