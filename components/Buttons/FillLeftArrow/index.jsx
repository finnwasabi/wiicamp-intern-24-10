import React from "react";
import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";

function FillLeftArrow({ id }) {
  return (
    <div
      id={id}
      className="relative mr-2 h-[2.875rem] w-[2.875rem] cursor-pointer rounded-full bg-secondary-0 transition-all hover:shadow-xl"
    >
      <ArrowLeft className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

FillLeftArrow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FillLeftArrow;
