/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="checkBox"
        className="relative peer shrink-0 
        appearance-none h-6 w-6 mr-4 rounded border-[1px] border-black border-opacity-50
        checked:bg-secondary-2 checked:border-0
        hover:bg-secondary-0 
        focus:outline-none focus:ring-offset-0
        cursor-pointer"
      />
      <label htmlFor="checkBox" className="cursor-pointer">
        {label}
      </label>
      <svg
        className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#DB4444" />
        <path
          d="M5 12L10.25 17L19 7"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckBox;
