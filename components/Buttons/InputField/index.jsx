import React from "react";
import PropTypes from "prop-types";

function InputField({ label }) {
  return (
    <div>
      <div className="text-text-1 mb-2">{label}</div>
      <input
        type="text"
        className="rounded bg-secondary-0 h-[50px] w-[470px] py-2 px-2"
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputField;
