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
        className="rounded bg-secondary-0 h-[3.125rem] w-full py-4 px-4"
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
