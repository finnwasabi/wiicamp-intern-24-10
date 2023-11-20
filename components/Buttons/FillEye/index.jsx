import React from "react";
import { Eye } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

function FillEye({ product }) {
  return (
    <Link
      href={`/${product.category}/${product.id}`}
      className="relative h-[34px] w-[34px] rounded-full bg-white transition-all hover:shadow-big"
    >
      <Eye
        color="#000000"
        strokeWidth={1.7}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </Link>
  );
}

FillEye.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default FillEye;
