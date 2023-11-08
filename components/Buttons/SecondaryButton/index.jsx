/* eslint-disable react/button-has-type */
import React from "react";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
function SecondaryButton({ label, isShow }) {
  return (
    <div>
      <button
        className={clsx(
          "flex h-auto w-full items-center justify-center rounded border-2 border-black border-opacity-50 bg-transparent px-12 py-4 font-medium text-black transition-all hover:opacity-50",
          isShow &&
            "before:mr-4 before:h-6 before:w-6 before:content-googleIcon",
        )}
      >
        {label}
      </button>
    </div>
  );
}

export default SecondaryButton;
