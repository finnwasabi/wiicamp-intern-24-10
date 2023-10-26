import React from "react";

function FlashSaleTimer() {
  return (
    <div className="flex">
      <div className="flex rounded-full bg-white w-[62px] max-h-[62px] justify-center mr-6">
        <div className="py-[14px]">
          <div className="flex font-semibold leading-[20px] justify-center">
            23
          </div>
          <div className="flex text-xs leading-[18px] justify-center">
            Hours
          </div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[62px] max-h-[62px] justify-center mr-6">
        <div className="py-[14px]">
          <div className="flex font-semibold leading-[20px] justify-center">
            05
          </div>
          <div className="flex text-xs leading-[18px] justify-center">Days</div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[62px] max-h-[62px] justify-center mr-6">
        <div className="py-[14px]">
          <div className="flex font-semibold leading-[20px] justify-center">
            59
          </div>
          <div className="flex text-xs leading-[18px] justify-center">
            Minutes
          </div>
        </div>
      </div>
      <div className="flex rounded-full bg-white w-[62px] max-h-[62px] justify-center mr-6">
        <div className="py-[14px]">
          <div className="flex font-semibold leading-[20px] justify-center">
            35
          </div>
          <div className="flex text-xs leading-[18px] justify-center">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSaleTimer;
