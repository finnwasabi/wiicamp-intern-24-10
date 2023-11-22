/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({ label, type, onClick }) {
  return (
    <div>
      <button
        type={type}
        className="h-auto w-full rounded bg-button-2 px-12 py-4 font-medium text-white transition-all hover:bg-hover-button-0"
        onClick={onClick}
        aria-label={label}
      >
        {label}
      </button>
    </div>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;
