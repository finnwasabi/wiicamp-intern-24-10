import React from "react";
import PropTypes from "prop-types";

import JustForYouItem from "../JustForYouItem";

function JustForYouItemList({ products }) {
  return (
    <div className="grid w-full grid-cols-1 flex-row place-items-center justify-between gap-x-[1.875rem] gap-y-[3.75rem] pt-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.slice(12, 16).map((product) => (
        <JustForYouItem key={product.id} product={product} />
      ))}
    </div>
  );
}

JustForYouItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default JustForYouItemList;
