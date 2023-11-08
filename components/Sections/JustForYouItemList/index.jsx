import React from "react";

import JustForYouItem from "../JustForYouItem";

function JustForYouItemList() {
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:flex xl:flex-row xl:gap-y-0">
      <JustForYouItem id={1} />
      <JustForYouItem id={2} />
      <JustForYouItem id={3} />
      <JustForYouItem id={4} />
    </div>
  );
}

export default JustForYouItemList;
