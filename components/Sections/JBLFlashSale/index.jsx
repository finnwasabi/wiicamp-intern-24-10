import React from "react";
import Image from "next/image";

import BuyNow from "@/components/Buttons/BuyNow";
import FlashSaleTimer from "@/components/Sections/FlashSaleTimer";
import FlashSaleTimerBlack from "@/components/Sections/FlashSaleTimerBlack";

function JBLFlashSale() {
  return (
    <div className="container relative py-0 mb-[4.4375rem]">
      <div className="absolute hidden md:block xl:block xl:top-[17.0625rem] xl:left-[3.5rem] md:bottom-20 md:left-[3rem]">
        <FlashSaleTimer />
      </div>
      <div className="md:hidden xl:hidden">
        <FlashSaleTimerBlack />
      </div>
      <div className="absolute bottom-3 left-7 xl:bottom-[4.3125rem] xl:left-[3.5rem] md:bottom-4 md:left-[3rem] sm:bottom-8 sm:left-[2.5rem]">
        <BuyNow />
      </div>
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
