/* eslint-disable react/prop-types */
import React from "react";
import { CircularProgress } from "@material-ui/core";
import dynamic from "next/dynamic";

import FillLeftArrow from "@/components/Buttons/FillLeftArrow";
import FillRightArrow from "@/components/Buttons/FillRightArrow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const OurProductsList = dynamic(
  () => import("@/components/Sections/OurProductsList"),
  {
    ssr: false,
    loading: () => {
      return (
        <div className="container flex items-center justify-center">
          <CircularProgress color="black" size={20} />
        </div>
      );
    },
  },
);

function OurProducts({ products }) {
  return (
    <div>
      <div className="container flex items-center justify-between py-0 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4">
        <div className="col-span-1 flex items-center font-semibold leading-5">
          <div className="h-10 w-5 rounded bg-button-2" />
          <div className="ml-4 text-button-2">Our Products</div>
        </div>
        <div className="text-2xl font-semibold md:hidden xl:hidden">
          Explore
        </div>
      </div>
      <div className="container mb-[3.75rem] mt-[1.5rem] grid grid-cols-2 items-center py-0">
        <div className="col-span-1 hidden text-4xl font-semibold leading-[3rem] md:flex xl:flex">
          Explore Our Products
        </div>
        <div className="relative col-span-1">
          <div className="right-0 flex items-center">
            <div className="absolute right-0 hidden md:flex xl:flex">
              <FillLeftArrow id="prev3" />
              <FillRightArrow id="next3" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurProductsList products={products} />
      </div>
      <div className="container mt-[60px] flex justify-center pb-[8.75rem] pt-0">
        <PrimaryButton label="View All Products" />
      </div>
    </div>
  );
}

export default OurProducts;
