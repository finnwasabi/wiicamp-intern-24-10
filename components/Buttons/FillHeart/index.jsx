import React from "react";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

function FillHeart({ color, bg }) {
  return (
    <div className="group absolute right-3 top-3 flex">
      <button
        type="button"
        className={`relative h-[34px] w-[34px] rounded-full group-hover:shadow-big bg-${bg} transition-all`}
      >
        <Heart
          color={color}
          strokeWidth={1.7}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
}

FillHeart.propTypes = {
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default FillHeart;
