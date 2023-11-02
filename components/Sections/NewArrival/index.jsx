import React from "react";
import clsx from "clsx";
import Image from "next/image";

import s from "./NewArrival.module.scss";

function NewArrival() {
  return (
    <div>
      <div className="container lg:grid lg:grid-cols-4 py-0 flex items-center justify-between">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Featured</div>
        </div>
        <div className="lg:hidden font-semibold text-2xl">New Arrival</div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[1.5rem] mb-[3.75rem]">
        <div className="hidden lg:flex col-span-1 text-4xl leading-[3rem] font-semibold">
          New Arrival
        </div>
      </div>
      <div className="justify-between container grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 py-0 relative">
        <div
          className={clsx(
            s.Item,
            "col-span-2 lg:col-span-1 relative cursor-pointer",
          )}
        >
          <Image
            className={clsx(s.Image, "rounded")}
            src="/NewArrival/NewArrival1.png"
            width={570}
            height={600}
            alt="Picture of new arrival"
          />
          <div
            className={clsx(
              s.Text,
              "absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white w-[15.125rem]",
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
        <div className="col-span-2 lg:col-span-1 relative">
          <div className={clsx(s.Item, "cursor-pointer")}>
            <Image
              className={clsx(
                s.Image,
                "rounded mb-2 lg:mb-0 lg:absolute top-0 right-0",
              )}
              src="/NewArrival/NewArrival2.png"
              width={600}
              height={284}
              alt="Picture of new arrival"
            />
            <div
              className={clsx(
                s.Text,
                "absolute top-5 lg:top-[7.4375rem] left-4 lg:left-6 text-white w-[15.125rem]",
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
          <div className="flex justify-between lg:absolute bottom-0 right-0 left-0 cursor-pointer">
            <div className={s.Item}>
              <Image
                className={clsx(s.Image, "rounded")}
                src="/NewArrival/NewArrival3.png"
                width={270}
                height={284}
                alt="Picture of new arrival"
              />
              <div
                className={clsx(
                  s.Text,
                  "absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white w-[15.125rem]",
                )}
              >
                <div className="text-2xl leading-6 mb-2 font-semibold">
                  Speakers
                </div>
                <div className="text-sm mb-2">Amazon wireless speakers</div>
                <div className="font-medium underline">Shop Now</div>
              </div>
            </div>
            <div className={clsx(s.Item, "relative cursor-pointer")}>
              <Image
                className={clsx(s.Image, "rounded")}
                src="/NewArrival/NewArrival4.png"
                width={270}
                height={284}
                alt="Picture of new arrival"
              />
              <div
                className={clsx(
                  s.Text,
                  "absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white w-[15.125rem]",
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
  );
}

export default NewArrival;
