import React from "react";
import clsx from "clsx";
import Link from "next/link";

import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import s from "./MyAccountSection.module.scss";

function MyAccountSection() {
  return (
    <div className="container mb-[8.75rem]">
      <div className="flex gap-3 py-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <span className="text-text-1">/</span>
        <span className="text-black cursor-default">My Account</span>
        <span className="ml-auto cursor-default">
          Welcome! <span className="text-secondary-2">ThaiVG</span>
        </span>
      </div>
      <div className="flex gap-x-[6.25rem] justify-center">
        <div className="hidden lg:block w-fit">
          <div className="py-4 font-semibold">Manage My Account</div>
          <div className="flex flex-col gap-y-2 ml-[2.1875rem] text-text-1">
            <span className={clsx(s.Active, "cursor-pointer")}>My Profile</span>
            <span className="cursor-pointer">Address Book</span>
            <span className="cursor-pointer">My Payment Options</span>
          </div>
          <div className="py-4 font-semibold">My Orders</div>
          <div className="flex flex-col gap-y-2 ml-[2.1875rem] text-text-1">
            <span className="cursor-pointer">My Returns</span>
            <span className="cursor-pointer">My Cancellations</span>
          </div>
          <div className="py-4 font-semibold">
            <Link href="/wishlist">My WishList</Link>
          </div>
        </div>
        <div className={clsx(s.Shadow, "rounded w-full")}>
          <form className="py-5 lg:py-10 px-5 lg:px-20">
            <div className="text-secondary-2 font-semibold text-xl pb-4">
              Edit Your Profile
            </div>
            <div className="flex flex-col gap-y-6 mb-6">
              <div className="flex lg:gap-x-[3.125rem] flex-col lg:flex-row gap-y-2 lg:gap-y-0">
                <div className="lg:w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="Thai"
                    label="First Name"
                    type="text"
                    autocomplete=""
                  />
                </div>
                <div className="lg:w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="VG"
                    label="Last Name"
                    type="text"
                    autocomplete=""
                  />
                </div>
              </div>
              <div className="flex lg:gap-x-[3.125rem] flex-col lg:flex-row gap-y-2 lg:gap-y-0">
                <div className="lg:w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="rimel1111@gmail.com"
                    label="Email"
                    type="email"
                    autocomplete=""
                  />
                </div>
                <div className="lg:w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="Kingston, 5236, United State"
                    label="Address"
                    type="text"
                    autocomplete=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <InputField
                  classNameLabel="mb-2"
                  placeholder="Current Passwod"
                  label="Password Changes"
                  type="password"
                  autocomplete="current-password"
                />
                <InputField
                  classNameLabel="mb-2"
                  placeholder="New Password"
                  label=""
                  type="password"
                  autocomplete="new-password"
                />
                <InputField
                  classNameLabel="mb-2"
                  placeholder="Confirm New Passwod"
                  label=""
                  type="password"
                  autocomplete="new-password"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-8 justify-end">
              <Link href="/" type="button">
                Cancel
              </Link>
              <span className="hidden md:block">
                <PrimaryButton type="submit" label="Save Changes" />
              </span>
              <span className="md:hidden">
                <PrimaryButton type="submit" label="Save" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyAccountSection;
