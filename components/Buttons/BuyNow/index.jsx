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
          "py-4 px-12 text-white font-medium bg-button-1 rounded",
        )}
      >
        Buy Now!
      </button>
    </div>
  );
}

export default BuyNow;
