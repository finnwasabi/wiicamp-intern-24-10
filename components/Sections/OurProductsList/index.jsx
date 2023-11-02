import React from "react";

import OurProductsItem from "../OurProductsItem";

function OurProductsList() {
  return (
    <div>
      <div className="lg:flex grid gap-y-10 lg:gap-y-0 w-fit lg:w-auto container justify-between pt-0 pb-[3.75rem]">
        <OurProductsItem id={1} />
        <OurProductsItem id={2} />
        <OurProductsItem id={3} />
        <OurProductsItem id={4} />
      </div>
      <div className="lg:flex grid gap-y-10 lg:gap-y-0 w-fit lg:w-auto container justify-between pt-0 pb-[3.75rem]">
        <OurProductsItem id={5} />
        <OurProductsItem id={6} />
        <OurProductsItem id={7} />
        <OurProductsItem id={8} />
      </div>
    </div>
  );
}

export default OurProductsList;
