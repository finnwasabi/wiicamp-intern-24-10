/* eslint-disable react/button-has-type */
import React from "react";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
function SecondaryButton({ label, isShow }) {
  return (
    <div>
      <button
        className={clsx(
          "flex justify-center items-center bg-transparent text-black border-black border-opacity-50 border-2 font-medium px-12 py-4 rounded w-full h-auto hover:opacity-50 transition-all",
          isShow &&
            "before:content-googleIcon before:mr-4 before:h-6 before:w-6",
        )}
      >
        {label}
      </button>
    </div>
  );
}

export default SecondaryButton;
