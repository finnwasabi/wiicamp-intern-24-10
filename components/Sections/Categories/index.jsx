import React from "react";

import FillLeftArrow from "../../Buttons/FillLeftArrow";
import FillRightArrow from "../../Buttons/FillRightArrow";
import CategoriesSlider from "../CategoriesSlider";

function Categories() {
  return (
    <div className="mt-20">
      <div className="container lg:grid lg:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Categories</div>
        </div>
        <div className="lg:hidden font-semibold text-2xl">Browse</div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-6 mb-[3.75rem]">
        <div className="hidden lg:flex col-span-1 text-4xl leading-[3rem] font-semibold">
          Browse By Category
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute hidden lg:flex right-0">
              <FillLeftArrow id="prev1" />
              <FillRightArrow id="next1" />
            </div>
          </div>
        </div>
      </div>
      <CategoriesSlider />
    </div>
  );
}

export default Categories;
