import React from "react";
import clsx from "clsx";
import Image from "next/image";

import s from "./NewArrival.module.scss";

function NewArrival() {
  return (
    <div>
      <div className="container md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Featured</div>
        </div>
        <div className="md:hidden xl:hidden font-semibold text-2xl">
          New Arrival
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[1.5rem] mb-[3.75rem]">
        <div className="hidden md:flex xl:flex col-span-1 text-4xl leading-[3rem] font-semibold">
          New Arrival
        </div>
      </div>
      <div className="justify-between container grid grid-cols-1 lg:grid-cols-2 lg:gap-5 xl:grid-cols-2 xl:gap-5 gap-2 py-0 relative">
        <div className="md:flex md:justify-center">
          <div
            className={clsx(
              s.Item,
              "col-span-1 relative cursor-pointer md:flex w-full",
            )}
          >
            <Image
              className={clsx(s.Image, "rounded sm:w-full")}
              src="/NewArrival/NewArrival1.png"
              width={570}
              height={600}
              alt="Picture of new arrival"
            />
            <div
              className={clsx(
                s.Text,
                "absolute bottom-4 xl:bottom-8 left-4 xl:left-8 text-white w-[15.125rem]",
              )}
            >
              <div className="text-2xl leading-6 mb-4 font-semibold">
                PlayStation 5
              </div>
              <div className="text-sm mb-4">
                Black and White version of the PS5 coming out on sale.
              </div>
              <div className="font-medium underline">Shop Now</div>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center">
          <div className="col-span-2 xl:col-span-1 relative w-full">
            <div className="xl:grid xl:grid-cols-1 xl:grid-rows-2 xl:gap-y-[1.875rem]">
              <div
                className={clsx(
                  s.Item,
                  "cursor-pointer xl:row-span-1 rounded mb-2 xl:mb-0",
                )}
              >
                <Image
                  className={(clsx(s.Image), " w-full")}
                  src="/NewArrival/NewArrival2.png"
                  width={600}
                  height={284}
                  alt="Picture of new arrival"
                />
                <div
                  className={clsx(
                    s.Text,
                    "absolute top-5 lg:top-[7.4375rem] xl:top-[7.4375rem] left-4 xl:left-6 text-white w-[15.125rem]",
                  )}
                >
                  <div className="text-2xl leading-6 mb-4 font-semibold">
                    Women&apos;s Collections
                  </div>
                  <div className="text-sm mb-4">
                    Featured woman collections that give you another vibe.
                  </div>
                  <div className="font-medium underline">Shop Now</div>
                </div>
              </div>
              <div className="xl:row-span-1">
                <div className="flex justify-between xl:grid-col-2 cursor-pointer">
                  <div
                    className={clsx(s.Item, "relative cursor-pointer rounded")}
                  >
                    <Image
                      className={clsx(s.Image)}
                      src="/NewArrival/NewArrival3.png"
                      width={270}
                      height={284}
                      alt="Picture of new arrival"
                    />
                    <div
                      className={clsx(
                        s.Text,
                        "absolute bottom-4 xl:bottom-6 left-4 xl:left-6 text-white w-[15.125rem]",
                      )}
                    >
                      <div className="text-2xl leading-6 mb-2 font-semibold">
                        Speakers
                      </div>
                      <div className="text-sm mb-2">
                        Amazon wireless speakers
                      </div>
                      <div className="font-medium underline">Shop Now</div>
                    </div>
                  </div>
                  <div
                    className={clsx(s.Item, "relative cursor-pointer rounded")}
                  >
                    <Image
                      className={clsx(s.Image)}
                      src="/NewArrival/NewArrival4.png"
                      width={270}
                      height={284}
                      alt="Picture of new arrival"
                    />
                    <div
                      className={clsx(
                        s.Text,
                        "absolute bottom-4 xl:bottom-6 left-4 xl:left-6 text-white w-[15.125rem]",
                      )}
                    >
                      <div className="text-2xl leading-6 mb-2 font-semibold">
                        Perfume
                      </div>
                      <div className="text-sm mb-2">GUCCI INTENSE OUD EDP</div>
                      <div className="font-medium underline">Shop Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
