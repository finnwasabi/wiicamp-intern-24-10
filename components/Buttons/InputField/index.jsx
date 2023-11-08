import React from "react";
import PropTypes from "prop-types";

function InputField({
  label,
  placeholder,
  classNameLabel,
  type,
  autocomplete,
}) {
  return (
    <div>
      <div className={classNameLabel}>{label}</div>
      <input
        type={type}
        className="h-[3.125rem] w-full rounded bg-secondary-0 px-4 py-4"
        placeholder={placeholder}
        required
        autoComplete={autocomplete}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
};

export default InputField;
