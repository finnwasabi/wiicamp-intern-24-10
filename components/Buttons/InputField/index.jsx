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
  onChange,
  value,
  name,
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
        onChange={onChange}
        value={value}
        name={name}
        aria-label={label}
      />
    </div>
  );
}

InputField.defaultProps = {
  className: "",
  defaultValue: "",
  name: "",
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,

  defaultValue: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;
