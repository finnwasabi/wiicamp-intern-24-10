import React from "react";

import FillLeftArrow from "@/components/Buttons/FillLeftArrow";
import FillRightArrow from "@/components/Buttons/FillRightArrow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import OurProductsList from "@/components/Sections/OurProductsList";

function OurProducts() {
  return (
    <div>
      <div className="container md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Our Products</div>
        </div>
        <div className="md:hidden xl:hidden font-semibold text-2xl">
          Explore
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[1.5rem] mb-[3.75rem]">
        <div className="hidden md:flex xl:flex col-span-1 text-4xl leading-[3rem] font-semibold">
          Explore Our Products
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute hidden md:flex xl:flex right-0">
              <FillLeftArrow id="prev" />
              <FillRightArrow id="next" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurProductsList />
      </div>
      <div className="container flex justify-center pt-0 pb-[8.75rem]">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

export default OurProducts;
