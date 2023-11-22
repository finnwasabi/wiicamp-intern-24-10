import React from "react";
import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";

function FillLeftArrow({ id }) {
  return (
    <button
      type="button"
      id={id}
      className="relative mr-2 h-[2.875rem] w-[2.875rem] rounded-full bg-secondary-0 transition-all hover:shadow-xl"
      aria-label="Left Arrow"
    >
      <ArrowLeft className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}

FillLeftArrow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FillLeftArrow;
