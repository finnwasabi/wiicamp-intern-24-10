import React from "react";
import Image from "next/image";
import Link from "next/link";

import BuyNow from "@/components/Buttons/BuyNow";
import FlashSaleTimer from "@/components/Sections/FlashSaleTimer";
import FlashSaleTimerBlack from "@/components/Sections/FlashSaleTimerBlack";

function JBLFlashSale() {
  return (
    <div className="container relative mb-[4.4375rem] py-0">
      <div className="absolute hidden md:bottom-20 md:left-[3rem] md:block xl:left-[3.5rem] xl:top-[17.0625rem] xl:block">
        <FlashSaleTimer />
      </div>
      <div className="md:hidden xl:hidden">
        <FlashSaleTimerBlack />
      </div>
      <Link
        href="https://www.facebook.com/hahuy202"
        className="absolute bottom-3 left-7 sm:bottom-8 sm:left-[2.5rem] md:bottom-4 md:left-[3rem] xl:bottom-[4.3125rem] xl:left-[3.5rem]"
      >
        <BuyNow />
      </Link>
      <Image
        src="/JBLFlashSale.png"
        width={1170}
        height={500}
        alt="Picture of FLASH SALE"
      />
    </div>
  );
}

export default JBLFlashSale;
