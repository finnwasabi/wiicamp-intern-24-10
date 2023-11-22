import React from "react";
import PropTypes from "prop-types";

function DiscountPercent({ label }) {
  return (
    <div className="z-9999">
      <button
        type="button"
        className="absolute left-0 ml-3 mt-3 h-auto w-max rounded bg-button-2 px-3 py-1 text-xs font-normal leading-[1.125rem] text-white"
        aria-label={label}
      >
        {label}
      </button>
    </div>
  );
}

DiscountPercent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DiscountPercent;
