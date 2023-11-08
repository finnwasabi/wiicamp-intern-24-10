/* eslint-disable react/prop-types */
import React from "react";

import ThisMonthItem from "../ThisMonthItem";

function ThisMonthList({ products }) {
  return (
    <div>
      <div className="container mb-[4rem] grid w-full grid-cols-1 flex-row place-items-center justify-between gap-x-[1.875rem] gap-y-[3.75rem] sm:mb-[8.75rem] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(8, 12).map((product) => (
          <ThisMonthItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ThisMonthList;
