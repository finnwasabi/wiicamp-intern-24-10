import React from "react";
import Image from "next/image";

import BuyNow from "@/components/Buttons/BuyNow";
import FlashSaleTimer from "@/components/Sections/FlashSaleTimer";

function JBLFlashSale() {
  return (
    <div className="container relative py-0 mb-[4.4375rem]">
      <div className="absolute top-[17.0625rem] left-[3.5rem]">
        <FlashSaleTimer />
      </div>
      <div className="absolute bottom-[4.3125rem] left-[3.5rem]">
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
