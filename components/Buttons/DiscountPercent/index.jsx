import React from "react";
import PropTypes from "prop-types";

function DiscountPercent({ label }) {
  return (
    <div className="z-9999">
      <button
        type="button"
        className="bg-button-2 text-white text-xs font-normal px-3 py-1 mt-3 ml-3 rounded w-max h-auto absolute left-0 leading-[18px]"
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
