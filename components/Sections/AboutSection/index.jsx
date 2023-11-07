import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import AboutSlider from "@/components/Sections/AboutSlider";
import CustomerServices from "@/components/Sections/CustomerServices";

import s from "./AboutSection.module.scss";

function AboutSection() {
  return (
    <div className="container">
      <div className="mt-20 flex flex-col">
        <div className="flex gap-3 mt-20 mb-[2.625rem] py-0">
          <Link href="/" className="text-text-1">
            Home
          </Link>
          <div className="text-text-1">/</div>
          <div className="cursor-default">About</div>
        </div>
        <div className="py-0 flex flex-col lg:flex-row items-center lg:h-[calc(609/1440*100vw)]">
          <div className="lg:hidden w-full">
            <Image
              className="w-full h-full rounded mb-10"
              src="/AboutSideIMG.png"
              width={705}
              height={609}
              alt="Picture of the side image"
              priority
            />
          </div>
          <div className="lg:absolute lg:max-w-[485px] xl:max-w-[32.8125rem]">
            <div className="mb-10 font-semibold text-[3.375rem]">Our Story</div>
            <div className="flex flex-col gap-y-6">
              <div>
                Launced in 2015, Exclusive is South Asia&apos;s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </div>
              <div>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </div>
            </div>
          </div>
          <div className="absolute hidden lg:block w-[calc(705/1440*100vw)] right-0">
            <Image
              className="w-full h-full rounded"
              src="/AboutSideIMG.png"
              width={705}
              height={609}
              alt="Picture of the side image"
              priority
            />
          </div>
        </div>
      </div>
      <div className="my-[6.25rem] lg:my-[8.75rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[1.875rem] lg:gap-x-[1.875rem]">
          <div className="flex justify-center">
            <button
              type="button"
              className={clsx(
                s.AboutButton,
                "group max-h-[14.375rem] h-full w-[16.875rem] py-[1.875rem] rounded border-[0.0625rem] border-black border-opacity-30",
              )}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex group-hover:hidden">
                  <Image
                    src="/AboutServices/Services1.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
                <div className="hidden group-hover:flex">
                  <Image
                    src="/AboutServices/Services1onHover.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
              </div>
              <div className="mb-3 text-[2rem] leading-[1.875rem] font-bold tracking-wide">
                10.5k
              </div>
              <div>Sallers active our site</div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={clsx(
                s.AboutButton,
                "group max-h-[14.375rem] h-full w-[16.875rem] py-[1.875rem] rounded border-[0.0625rem] border-black border-opacity-30",
              )}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex group-hover:hidden">
                  <Image
                    src="/AboutServices/Services2.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
                <div className="hidden group-hover:flex">
                  <Image
                    src="/AboutServices/Services2onHover.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
              </div>
              <div className="mb-3 text-[2rem] leading-[1.875rem] font-bold tracking-wide">
                33k
              </div>
              <div>Mopnthly Produduct Sale</div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={clsx(
                s.AboutButton,
                "group max-h-[14.375rem] h-full w-[16.875rem] py-[1.875rem] rounded border-[0.0625rem] border-black border-opacity-30",
              )}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex group-hover:hidden">
                  <Image
                    src="/AboutServices/Services3.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
                <div className="hidden group-hover:flex">
                  <Image
                    src="/AboutServices/Services3onHover.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
              </div>
              <div className="mb-3 text-[2rem] leading-[1.875rem] font-bold tracking-wide">
                45.5k
              </div>
              <div>Customer active in our site</div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={clsx(
                s.AboutButton,
                "group max-h-[14.375rem] h-full w-[16.875rem] py-[1.875rem] rounded border-[0.0625rem] border-black border-opacity-30",
              )}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex group-hover:hidden">
                  <Image
                    src="/AboutServices/Services4.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
                <div className="hidden group-hover:flex">
                  <Image
                    src="/AboutServices/Services4onHover.svg"
                    alt="Picture of the svg icon"
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
              </div>
              <div className="mb-3 text-[2rem] leading-[1.875rem] font-bold tracking-wide">
                25k
              </div>
              <div>Anual gross sale in our site</div>
            </button>
          </div>
        </div>
      </div>
      <AboutSlider />
      <CustomerServices />
    </div>
  );
}

export default AboutSection;
