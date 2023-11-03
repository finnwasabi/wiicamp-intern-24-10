import React from "react";

import ThisMonthItem from "../ThisMonthItem";

function ThisMonthList() {
  return (
    <div>
      <div className="grid sm:hidden md:hidden xl:gap-x-0 w-fit xl:w-auto xl:flex gap-y-10 xl:gap-y-0 container justify-between mb-[4rem] sm:mb-[8.75rem]">
        <ThisMonthItem id={1} />
        <ThisMonthItem id={2} />
        <ThisMonthItem id={3} />
        <ThisMonthItem id={4} />
      </div>
      <div className="hidden xl:hidden sm:grid md:grid sm:grid-cols-2 md:grid-cols-2 mb-[4rem]">
        <div className="flex flex-col gap-y-10 items-center">
          <ThisMonthItem id={1} />
          <ThisMonthItem id={2} />
        </div>
        <div className="flex flex-col gap-y-10 items-center">
          <ThisMonthItem id={3} />
          <ThisMonthItem id={4} />
        </div>
      </div>
    </div>
  );
}

export default ThisMonthList;
