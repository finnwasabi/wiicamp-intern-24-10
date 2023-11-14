import React from "react";
import { Trash2 } from "lucide-react";

function FillTrash() {
  return (
    <div className="group absolute right-3 top-3 flex cursor-pointer">
      <button
        type="button"
        className="group-active:brightness-60 relative h-[34px] w-[34px] rounded-full bg-white transition-all group-hover:bg-secondary-2"
      >
        <Trash2
          color="#000000"
          strokeWidth={1.7}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:stroke-white"
        />
      </button>
    </div>
  );
}

export default FillTrash;
