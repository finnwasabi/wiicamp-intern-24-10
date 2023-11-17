import React from "react";
import PropTypes from "prop-types";

function InputField({
  label,
  placeholder,
  className,
  classNameLabel,
  type,
  autocomplete,
  defaultValue,
}) {
  return (
    <div>
      <div className={classNameLabel}>{label}</div>
      <input
        type={type}
        className={
          `h-[3.125rem] w-full rounded bg-secondary-0 px-4 py-4` +
          ` ${className}`
        }
        placeholder={placeholder}
        required
        autoComplete={autocomplete}
        defaultValue={defaultValue}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
};

export default InputField;
