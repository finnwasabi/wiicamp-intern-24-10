import React from "react";

import ThisMonthItem from "../ThisMonthItem";

function ThisMonthList() {
  return (
    <div className="flex container justify-between mb-[8.75rem]">
      <ThisMonthItem id={1} />
      <ThisMonthItem id={2} />
      <ThisMonthItem id={3} />
      <ThisMonthItem id={4} />
    </div>
  );
}

export default ThisMonthList;
