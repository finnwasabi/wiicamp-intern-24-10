import React from "react";
import PropTypes from "prop-types";

import SecondaryButton from "@/components/Buttons/SecondaryButton";
import JustForYouItemList from "@/components/Sections/JustForYouItemList";

function JustForYou({ products }) {
  return (
    <div>
      <div className="">
        <div className="mb-[3.75rem] flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="mr-4 h-10 w-5 rounded bg-button-2" />
            <div className="text-xl font-semibold leading-[3rem]">
              Just For You
            </div>
          </div>
          <div className="w-max">
            <SecondaryButton label="See All" />
          </div>
        </div>
      </div>
      <div>
        <JustForYouItemList products={products} />
      </div>
    </div>
  );
}

JustForYou.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default JustForYou;
