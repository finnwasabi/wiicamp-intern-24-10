import React from "react";
import clsx from "clsx";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

function FillHeart({ color, bg }) {
  return (
    <div className="group absolute right-3 top-3 flex">
      <button
        type="button"
        className={clsx(
          bg,
          "relative h-[2.125rem] w-[2.125rem] rounded-full transition-all group-hover:shadow-big",
        )}
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
