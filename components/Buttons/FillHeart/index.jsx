import React from "react";
import { Heart } from "lucide-react";

function FillHeart() {
  return (
    <div className="absolute right-3 top-3 flex">
      <button
        type="button"
        className="relative h-[34px] w-[34px] rounded-full bg-white"
      >
        <Heart
          strokeWidth={1.7}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
}

export default FillHeart;
