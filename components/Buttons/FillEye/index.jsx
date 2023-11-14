import React from "react";
import { Eye } from "lucide-react";

function FillEye() {
  return (
    <button
      type="button"
      className="hover:shadow-big relative h-[34px] w-[34px] rounded-full bg-white transition-all"
    >
      <Eye
        color="#000000"
        strokeWidth={1.7}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  );
}

export default FillEye;
