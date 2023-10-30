import React from "react";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYouItemList from "@/components/Sections/JustForYouItemList";

function JustForYou() {
  return (
    <div>
      <div className="grid grid-cols-2 items-center py-0 mt-[24px]">
        <div className="flex items-center mb-[60px]">
          <div className="col-span-1 h-10 w-5 bg-button-2 rounded mr-4" />
          <div className="col-span-1 text-xl leading-[48px] font-semibold">
            Just For You
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="flex items-center right-0">
            <div className="absolute flex right-0">
              <SecondaryButton label="See All" />
            </div>
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
