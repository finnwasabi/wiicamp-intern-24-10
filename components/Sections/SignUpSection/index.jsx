import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";

function SignUpSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative">
      <div className="mb-[8.75rem] mt-[3.75rem] pt-[3.75rem] lg:pt-0">
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
                Create an account
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  required
                />
                <div className="relative mb-10">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                    autoComplete="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password.length > 0 && (
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <Eye className="absolute right-0 top-1" />
                      ) : (
                        <EyeOff className="absolute right-0 top-1" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="mb-8 w-full">
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
                  className="font-semibold underline"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
