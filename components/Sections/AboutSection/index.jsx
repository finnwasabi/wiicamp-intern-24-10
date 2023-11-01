import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutSection() {
  return (
    <div className="container">
      <div className="flex gap-3 my-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <div className="text-text-1">/</div>
        <div className="cursor-default">About</div>
      </div>
      <div className="flex">
        <div className="w-[calc(525/1440*100vw)]">
          <div className="mb-10 font-semibold text-[54px]">Our Story</div>
          <div className="flex flex-col gap-y-6">
            <div>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(705/1440*100vw)] ml-auto">
        <Image
          className="w-full h-full"
          src="/AboutSideIMG.png"
          width={705}
          height={609}
          alt="Picture of the side image"
          objectFit="content"
        />
      </div>
    </div>
  );
}

export default AboutSection;
