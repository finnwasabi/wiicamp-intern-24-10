import React from "react";
import clsx from "clsx";
import Link from "next/link";

import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import useUserStore from "@/stores/userStore";

import s from "./MyAccountSection.module.scss";

function MyAccountSection() {
  const userStore = useUserStore();
  const { user } = userStore;
  return (
    <div className="container mb-[8.75rem]">
      <div className="flex gap-3 py-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <span className="text-text-1">/</span>
        <span className="cursor-default text-black">My Account</span>
        <span className="ml-auto cursor-default">
          Welcome! <span className="text-secondary-2">ThaiVG</span>
        </span>
      </div>

      <div className="flex flex-col justify-center gap-x-[6.25rem] lg:flex-row">
        <div className="hidden w-fit lg:block">
          <div className="cursor-default py-4 font-semibold">
            Manage My Account
          </div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1">
            <Link href="/MyAccount" className={clsx(s.Active)}>
              My Profile
            </Link>
            <Link href="/AddressBook">Address Book</Link>
            <Link href="/PaymentOptions">My Payment Options</Link>
          </div>
          <Link href="/MyOrders" className="flex py-4 font-semibold">
            My Orders
          </Link>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1">
            <Link href="/Returns">My Returns</Link>
            <Link href="/Cancellations">My Cancellations</Link>
          </div>
          <div className="py-4 font-semibold">
            <Link href="/Wishlist">My WishList</Link>
          </div>
        </div>
        <div className="">
          <div className="py-4 font-semibold lg:hidden">Manage My Account</div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className={clsx(s.Active, "cursor-pointer")}>My Profile</span>
          </div>
          <div
            className={clsx(
              s.Shadow,
              "my-4 w-full max-w-[870px] rounded lg:my-0",
            )}
          >
            <form className="px-5 py-5 lg:px-20 lg:py-10">
              <div className="pb-4 text-xl font-semibold text-secondary-2">
                Edit Your Profile
              </div>
              <div className="mb-6 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-[3.125rem] lg:gap-y-0">
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.name.firstname}
                      label="First Name"
                      type="text"
                      autocomplete=""
                      defaultValue={user.name.firstname}
                    />
                  </div>
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="value: capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.name.lastname}
                      label="Last Name"
                      type="text"
                      autocomplete=""
                      defaultValue={user.name.lastname}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-[3.125rem] lg:gap-y-0">
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.email}
                      label="Email"
                      type="email"
                      autocomplete=""
                      defaultValue={user.email}
                    />
                  </div>
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={`${user.address.street}, ${user.address.city}`}
                      label="Address"
                      type="text"
                      autocomplete=""
                      defaultValue={`${user.address.street}, ${user.address.city}`}
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
              <div className="flex items-center justify-end gap-x-8">
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
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className="cursor-pointer">Address Book</span>
            <span className="cursor-pointer">My Payment Options</span>
          </div>
          <div className="py-4 font-semibold lg:hidden">My Orders</div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className="cursor-pointer">My Returns</span>
            <span className="cursor-pointer">My Cancellations</span>
          </div>
          <div className="py-4 font-semibold lg:hidden">
            <Link href="/wishlist">My WishList</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountSection;
