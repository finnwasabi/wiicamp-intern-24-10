/* eslint-disable react/button-has-type */
import React from "react";

// eslint-disable-next-line react/prop-types
function PrimaryButton({ label, type }) {
  return (
    <div>
      <button
        type={type}
        className="h-auto w-full rounded bg-button-2 px-12 py-4 font-medium text-white transition-all hover:bg-hover-button-0"
      >
        {label}
      </button>
    </div>
  );
}

export default PrimaryButton;
