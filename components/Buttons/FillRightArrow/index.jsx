import React from "react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function FillRightArrow({ id }) {
  return (
    <div
      id={id}
      className="relative h-[2.875rem] w-[2.875rem] cursor-pointer rounded-full bg-secondary-0"
    >
      <ArrowRight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

FillRightArrow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FillRightArrow;
