import React from "react";
import clsx from "clsx";
import Image from "next/image";

import s from "./NewArrival.module.scss";

function NewArrival() {
  return (
    <div>
      <div className="container grid grid-cols-4 py-0">
        <div className="flex items-center font-semibold leading-5 col-span-1">
          <div className="h-10 w-5 bg-button-2 rounded" />
          <div className="text-button-2 ml-4">Featured</div>
        </div>
      </div>
      <div className="container grid grid-cols-2 items-center py-0 mt-[24px] mb-[60px]">
        <div className="col-span-1 text-4xl leading-[48px] font-semibold">
          New Arrival
        </div>
      </div>
      <div className="justify-between container grid grid-cols-2 gap-5 py-0 relative">
        <div className={clsx(s.Item, "col-span-1 relative cursor-pointer")}>
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
              "absolute bottom-8 left-8 text-white w-[242px]",
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
        <div className="col-span-1 relative">
          <div className={clsx(s.Item, "relative cursor-pointer")}>
            <Image
              className={clsx(s.Image, "rounded absolute top-0 right-0")}
              src="/NewArrival/NewArrival2.png"
              width={600}
              height={284}
              alt="Picture of new arrival"
            />
            <div
              className={clsx(
                s.Text,
                "absolute top-[119px] left-6 text-white w-[242px]",
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
          <div className="flex justify-between absolute bottom-0 right-0 left-0 cursor-pointer">
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
                  "absolute bottom-6 left-6 text-white w-[242px]",
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
                  "absolute bottom-6 left-6 text-white w-[242px]",
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