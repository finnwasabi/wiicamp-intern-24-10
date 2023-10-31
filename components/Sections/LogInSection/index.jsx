import React from "react";
import Image from "next/image";

import PrimaryButton from "../../Buttons/PrimaryButton";

function LogInSection() {
  return (
    <div className="relative">
      <div className="mt-[60px] mb-[140px]">
        <div className="w-[calc(805/1440*100vw)]">
          <Image
            className="left-0 w-full h-full"
            src="/SideImage/SideImage.png"
            width={805}
            height={706}
            alt="Picture of the side image"
            objectFit="content"
          />
        </div>
        <div className="container grid grid-cols-2 absolute top-1/2 -translate-y-1/2 py-0 right-0 left-0">
          <div className="col-span-1 col-start-2 flex flex-row-reverse">
            <div className="max-w-[370px]">
              <div className="text-4xl font-medium leading-[30px] mb-6">
                Log in to Exclusive
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="pb-2 border-b-2 mb-10 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="pb-2 border-b-2 mb-10 w-full focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex items-center justify-between">
                <PrimaryButton label="Log In" />
                <div className="text-button-2 cursor-pointer">
                  Forget Password?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSection;
