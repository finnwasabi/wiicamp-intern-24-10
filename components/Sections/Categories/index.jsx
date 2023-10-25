import React from "react";
import FillLeftRightArrows from "../../Buttons/FillLeftRightArrows";

function Categories() {
  return (
    <div className="mt-20">
      <div className="container grid grid-cols-4 py-0">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded"></div>
          <div className="text-button-2 ml-4">Categories</div>
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[24px] mb-[60px]">
        <div className="col-span-1 text-4xl leading-[48px] font-semibold">
          Browse By Category
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <FillLeftRightArrows />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
