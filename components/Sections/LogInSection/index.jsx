import React from "react";
import Image from "next/image";

import PrimaryButton from "../../Buttons/PrimaryButton";

function LogInSection() {
  return (
    <div className="relative">
      <div className="pt-[3.75rem] lg:pt-0 lg:mt-[3.75rem] mb-[8.75rem]">
        <div className="hidden lg:block w-[calc(805/1440*100vw)]">
          <Image
            className="left-0 w-full h-full"
            src="/SideImage/SideImage.png"
            width={805}
            height={706}
            alt="Picture of the side image"
            priority
          />
        </div>
        <div className="container justify-center grid lg:grid-cols-2 lg:absolute lg:top-1/2 lg:-translate-y-1/2 py-0 lg:right-0 lg:left-0">
          <div className="lg:col-span-1 lg:col-start-2 flex lg:flex-row-reverse">
            <form className="max-w-[23.125rem]">
              <div className="text-4xl font-medium leading-[1.875rem] mb-6">
                Log in to Exclusive
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="pb-2 border-b-2 mb-10 w-full focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="pb-2 border-b-2 mb-10 w-full focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <PrimaryButton type="submit" label="Log In" />
                <div className="text-button-2 cursor-pointer">
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
