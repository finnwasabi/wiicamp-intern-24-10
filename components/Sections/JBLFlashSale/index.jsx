import React from "react";
import Image from "next/image";

import BuyNow from "@/components/Buttons/BuyNow";
import FlashSaleTimer from "@/components/Sections/FlashSaleTimer";

function JBLFlashSale() {
  return (
    <div className="container relative py-0 mb-[71px]">
      <div className="absolute top-[273px] left-[56px]">
        <FlashSaleTimer />
      </div>
      <div className="absolute bottom-[69px] left-[56px]">
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
