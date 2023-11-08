import React from "react";
import Image from "next/image";

import PrimaryButton from "../../Buttons/PrimaryButton";

function LogInSection() {
  return (
    <div className="relative">
      <div className="mb-[8.75rem] pt-[3.75rem] lg:mt-[3.75rem] lg:pt-0">
        <div className="hidden w-[calc(805/1440*100vw)] lg:block">
          <Image
            className="left-0 h-full w-full"
            src="/SideImage/SideImage.png"
            width={805}
            height={706}
            alt="Picture of the side image"
            priority
          />
        </div>
        <div className="container grid justify-center py-0 lg:absolute lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:grid-cols-2">
          <div className="flex lg:col-span-1 lg:col-start-2 lg:flex-row-reverse">
            <form className="max-w-[23.125rem]">
              <div className="mb-6 text-4xl font-medium leading-[1.875rem]">
                Log in to Exclusive
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <PrimaryButton type="submit" label="Log In" />
                <div className="cursor-pointer text-button-2">
                  Forget Password?
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSection;
