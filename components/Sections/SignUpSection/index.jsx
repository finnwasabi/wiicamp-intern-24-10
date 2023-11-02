import React from "react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";

function SignUpSection() {
  return (
    <div className="relative">
      <div className="mt-[3.75rem] mb-[8.75rem]">
        <div className="w-[calc(805/1440*100vw)]">
          <Image
            className="left-0 w-full h-full"
            src="/SideImage/SideImage.png"
            width={805}
            height={706}
            alt="Picture of the side image"
          />
        </div>
        <div className="container grid grid-cols-2 absolute top-1/2 -translate-y-1/2 py-0 right-0 left-0">
          <div className="col-span-1 col-start-2 flex flex-row-reverse">
            <div className="max-w-[23.125rem]">
              <div className="text-4xl font-medium leading-[1.875rem] mb-6">
                Create an account
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="pb-2 border-b-2 mb-10 w-full focus:outline-none focus:border-black"
                />
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
              <div className="w-full mb-8">
                <div className="mb-4">
                  <PrimaryButton label="Create Account" />
                </div>
                <div>
                  <SecondaryButton label="Sign up with Google" isShow />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mr-4">Already have account?</div>
                <Link
                  href="/account/log-in"
                  className="underline font-semibold"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
