/* eslint-disable react/button-has-type */
import React from "react";

// eslint-disable-next-line react/prop-types
function PrimaryButton({ label, type }) {
  return (
    <div>
      <button
        type={type}
        className="bg-button-2 text-white font-medium px-12 py-4 rounded w-full h-auto hover:bg-hover-button-0 transition-all"
      >
        {label}
      </button>
    </div>
  );
}

export default PrimaryButton;
