import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import s from "./NewArrival.module.scss";

function NewArrival() {
  return (
    <div>
      <div className="container flex items-center justify-between py-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
        <div className="col-span-1 flex items-center font-semibold leading-5">
          <div className="h-10 w-5 rounded bg-button-2" />
          <div className="ml-4 text-button-2">Featured</div>
        </div>
        <div className="text-2xl font-semibold md:hidden xl:hidden">
          New Arrival
        </div>
      </div>
      <div className="container mb-[3.75rem] mt-[1.5rem] grid grid-cols-2 items-center py-0">
        <div className="col-span-1 hidden text-4xl font-semibold leading-[3rem] md:flex xl:flex">
          New Arrival
        </div>
      </div>
      <div className="container relative grid grid-cols-1 justify-between gap-2 py-0 lg:grid-cols-2 lg:gap-5 xl:grid-cols-2 xl:gap-5">
        <div className="md:flex md:justify-center xl:mr-auto">
          <Link
            href="/occbo"
            className={clsx(
              s.Item,
              "relative col-span-1 w-full md:flex xl:max-h-[37.5rem] xl:max-w-[35.625rem]",
            )}
          >
            <Image
              className={clsx(
                s.Image,
                "w-full rounded xl:max-h-[37.5rem] xl:max-w-[35.625rem]",
              )}
              src="/NewArrival/NewArrival1.png"
              width={570}
              height={600}
              alt="Picture of new arrival"
            />
            <div
              className={clsx(
                s.Text,
                "absolute bottom-4 left-4 w-[15.125rem] text-white xl:bottom-8 xl:left-8",
              )}
            >
              <div className="mb-4 text-2xl font-semibold leading-6">
                PlayStation 5
              </div>
              <div className="mb-4 text-sm">
                Black and White version of the PS5 coming out on sale.
              </div>
              <div className="font-medium underline">Shop Now</div>
            </div>
          </Link>
        </div>
        <div className="md:flex md:justify-center xl:ml-auto xl:max-w-[35.625rem]">
          <div className="relative col-span-2 w-full xl:col-span-1">
            <div className="xl:grid xl:h-[37.5rem] xl:grid-cols-1 xl:grid-rows-2">
              <Link
                href="/occbo"
                className={clsx(
                  s.Item,
                  "mb-2 rounded lg:mb-5 xl:row-span-1 xl:mb-0 xl:ml-auto xl:max-h-[17.75rem] xl:max-w-[35.625rem]",
                )}
              >
                <Image
                  className={clsx(
                    s.Image,
                    "w-full xl:max-h-[17.75rem] xl:max-w-[35.625rem]",
                  )}
                  src="/NewArrival/NewArrival2.png"
                  width={600}
                  height={284}
                  alt="Picture of new arrival"
                />
                <div
                  className={clsx(
                    s.Text,
                    "absolute left-4 top-6 w-[15.125rem] text-white sm:top-[8.75rem] md:top-[13.125rem] lg:top-[5rem] xl:left-6 xl:top-[7.4375rem]",
                  )}
                >
                  <div className="mb-4 text-2xl font-semibold leading-6">
                    Women&apos;s Collections
                  </div>
                  <div className="mb-4 text-sm">
                    Featured woman collections that give you another vibe.
                  </div>
                  <div className="font-medium underline">Shop Now</div>
                </div>
              </Link>
              <div className="xl:row-span-1 xl:ml-auto xl:mt-auto xl:h-[17.75rem] xl:w-[35.625rem]">
                <div className="xl:grid-col-2 flex gap-x-2 xl:justify-between xl:gap-x-0">
                  <Link
                    href="/occbo"
                    className={clsx(
                      s.Item,
                      "relative w-full rounded xl:max-h-[17.75rem] xl:max-w-[16.875rem]",
                    )}
                  >
                    <Image
                      className={clsx(
                        s.Image,
                        "w-full xl:max-h-[17.75rem] xl:max-w-[16.875rem]",
                      )}
                      src="/NewArrival/NewArrival3.png"
                      width={270}
                      height={284}
                      alt="Picture of new arrival"
                    />
                    <div
                      className={clsx(
                        s.Text,
                        "absolute bottom-4 left-4 w-full overflow-hidden text-ellipsis text-white xl:bottom-6 xl:left-6",
                      )}
                    >
                      <div className="mb-2 text-2xl font-semibold leading-6">
                        Speakers
                      </div>
                      <div className="mb-2 text-sm">
                        Amazon wireless speakers
                      </div>
                      <div className="font-medium underline">Shop Now</div>
                    </div>
                  </Link>
                  <Link
                    href="/occho"
                    className={clsx(
                      s.Item,
                      "relative w-full cursor-pointer rounded xl:max-h-[17.75rem] xl:max-w-[16.875rem]",
                    )}
                  >
                    <Image
                      className={clsx(
                        s.Image,
                        "w-full xl:max-h-[17.75rem] xl:max-w-[16.875rem]",
                      )}
                      src="/NewArrival/NewArrival4.png"
                      width={270}
                      height={284}
                      alt="Picture of new arrival"
                    />
                    <div
                      className={clsx(
                        s.Text,
                        "absolute bottom-4 left-4 w-[15.125rem] text-white xl:bottom-6 xl:left-6",
                      )}
                    >
                      <div className="mb-2 text-2xl font-semibold leading-6">
                        Perfume
                      </div>
                      <div className="mb-2 text-sm">GUCCI INTENSE OUD EDP</div>
                      <div className="font-medium underline">Shop Now</div>
                    </div>
                  </Link>
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
