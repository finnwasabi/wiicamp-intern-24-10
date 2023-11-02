import React from "react";
import clsx from "clsx";
import Link from "next/link";

import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import s from "./MyAccountSection.module.scss";

function MyAccountSection() {
  return (
    <div className="container mb-[8.75rem]">
      <div className="flex gap-3 my-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <div className="text-text-1">/</div>
        <div className="text-black cursor-default">My Account</div>
        <div className="ml-auto cursor-default">
          Welcome! <span className="text-secondary-2">ThaiVG</span>
        </div>
      </div>
      <div className="flex gap-x-[6.25rem]">
        <div className="w-fit">
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
        <div className={clsx(s.Shadow, "rounded")}>
          <form className="py-10 px-20">
            <div className="text-secondary-2 font-semibold text-xl pb-4">
              Edit Your Profile
            </div>
            <div className="flex flex-col gap-y-6 mb-6">
              <div className="flex gap-x-[3.125rem]">
                <div className="w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="Thai"
                    label="First Name"
                    type="text"
                  />
                </div>
                <div className="w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="VG"
                    label="Last Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-x-[3.125rem]">
                <div className="w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="rimel1111@gmail.com"
                    label="Email"
                    type="email"
                  />
                </div>
                <div className="w-[20.625rem]">
                  <InputField
                    classNameLabel="mb-2"
                    placeholder="Kingston, 5236, United State"
                    label="Address"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <InputField
                  classNameLabel="mb-2"
                  placeholder="Current Passwod"
                  label="Password Changes"
                  type="password"
                />
                <InputField
                  classNameLabel="mb-2"
                  placeholder="New Password"
                  type="password"
                />
                <InputField
                  classNameLabel="mb-2"
                  placeholder="Confirm New Passwod"
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-8 justify-end">
              <Link href="/" type="button">
                Cancel
              </Link>
              <PrimaryButton type="submit" label="Save Changes" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyAccountSection;
