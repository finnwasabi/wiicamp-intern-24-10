import React from "react";

import FillLeftArrow from "../../Buttons/FillLeftArrow";
import FillRightArrow from "../../Buttons/FillRightArrow";
import CategoriesSlider from "../CategoriesSlider";

function Categories() {
  return (
    <div className="mt-20">
      <div className="container flex items-center justify-between py-0 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4">
        <div className="col-span-1 flex items-center font-semibold leading-5">
          <div className="h-10 w-5 rounded bg-button-2" />
          <div className="ml-4 text-button-2">Categories</div>
        </div>
        <div className="text-2xl font-semibold md:hidden xl:hidden">Browse</div>
      </div>
      <div className="container mb-[3.75rem] mt-6 grid grid-cols-2 items-center py-0">
        <div className="col-span-1 hidden text-4xl font-semibold leading-[3rem] md:flex xl:flex">
          Browse By
        </div>
        <div className="relative col-span-1">
          <div className="right-0 flex items-center">
            <div className="absolute right-0 hidden md:flex xl:flex">
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
