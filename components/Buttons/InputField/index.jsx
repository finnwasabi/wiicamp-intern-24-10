import React from "react";
import PropTypes from "prop-types";

function InputField({ label, placeholder, classNameLabel, type }) {
  return (
    <div>
      <div className={classNameLabel}>{label}</div>
      <input
        type={type}
        className="rounded bg-secondary-0 h-[50px] w-full py-2 px-2"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
