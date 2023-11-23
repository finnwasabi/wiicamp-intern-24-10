import React from "react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function FillRightArrow({ id }) {
  return (
    <button
      type="button"
      id={id}
      className="relative h-[2.875rem] w-[2.875rem] rounded-full bg-secondary-0 transition-all hover:shadow-xl active:shadow-inner"
      aria-label="Right Arrow"
    >
      <ArrowRight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}

FillRightArrow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FillRightArrow;
