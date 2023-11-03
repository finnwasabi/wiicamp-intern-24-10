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
          "sm:py-4 sm:px-12 lg:py-4 lg:px-12 py-2 px-6 text-white font-medium bg-button-1 rounded",
        )}
      >
        Buy Now!
      </button>
    </div>
  );
}

export default BuyNow;
