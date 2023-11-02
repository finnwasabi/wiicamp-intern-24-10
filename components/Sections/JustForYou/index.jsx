import React from "react";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYouItemList from "@/components/Sections/JustForYouItemList";

function JustForYou() {
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center mb-[3.75rem]">
          <div className="flex justify-between items-center">
            <div className="h-10 w-5 bg-button-2 rounded mr-4" />
            <div className="text-xl leading-[3rem] font-semibold">
              Just For You
            </div>
          </div>
          <div className="w-max">
            <SecondaryButton label="See All" />
          </div>
        </div>
      </div>
      <div>
        <JustForYouItemList />
      </div>
    </div>
  );
}

export default JustForYou;
