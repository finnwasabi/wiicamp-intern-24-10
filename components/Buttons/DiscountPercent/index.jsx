import React from "react";
import PropTypes from "prop-types";

function DiscountPercent({ label }) {
  return (
    <div>
      <button
        type="button"
        className="bg-button-2 text-white text-xs font-normal px-3 py-1 mt-3 ml-3 rounded w-max h-auto cursor-none"
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
