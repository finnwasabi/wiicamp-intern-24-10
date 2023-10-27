import React from "react";

import OurProductsItem from "../OurProductsItem";

function OurProductsList() {
  return (
    <div>
      <div className="flex container justify-between pt-0 pb-[60px]">
        <OurProductsItem id={1} />
        <OurProductsItem id={2} />
        <OurProductsItem id={3} />
        <OurProductsItem id={4} />
      </div>
      <div className="flex container justify-between pt-0 pb-[60px]">
        <OurProductsItem id={5} />
        <OurProductsItem id={6} />
        <OurProductsItem id={7} />
        <OurProductsItem id={8} />
      </div>
    </div>
  );
}

export default OurProductsList;
