/* eslint-disable react/button-has-type */
import React from "react";
import clsx from "clsx";

import s from "./BuyNow.module.scss";

function BuyNow() {
  return (
    <div>
      <button
        className={clsx(
          s.buy,
          "rounded bg-button-1 px-6 py-2 font-medium text-white sm:px-12 sm:py-4 lg:px-12 lg:py-4",
        )}
      >
        Buy Now!
      </button>
    </div>
  );
}

export default BuyNow;
