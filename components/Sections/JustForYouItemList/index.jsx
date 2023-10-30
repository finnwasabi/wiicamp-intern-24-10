import React from "react";

import JustForYouItem from "../JustForYouItem";

function JustForYouItemList() {
  return (
    <div className="flex justify-between">
      <JustForYouItem id={1} />
      <JustForYouItem id={2} />
      <JustForYouItem id={3} />
      <JustForYouItem id={4} />
    </div>
  );
}

export default JustForYouItemList;
