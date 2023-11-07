/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import CheckBox from "@/components/Buttons/CheckBox";
import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

function CheckOutSection() {
  return (
    <div className="container mb-[8.75rem]">
      <div className="flex gap-3 py-20">
        <span className="text-text-1 cursor-default">Account</span>
        <span className="text-text-1 cursor-default">/</span>
        <Link href="/MyAccount" className="text-text-1">
          My Account
        </Link>
        <span className="text-text-1 cursor-default">/</span>
        <span className="text-text-1 cursor-default">Product</span>
        <span className="text-text-1 cursor-default">/</span>
        <Link href="/Cart" className="text-text-1">
          View Cart
        </Link>
        <span className="text-text-1 cursor-default">/</span>
        <span className="cursor-default">CheckOut</span>
      </div>
      <div className="pb-20 text-4xl leading-[1.875rem] font-semibold">
        Billing Details
      </div>
      <div className="grid grid-cols-2 justify-between">
        <form id="info" className="grid grid-cols-1 gap-y-8 mb-6 w-[29.375rem]">
          <InputField
            placeholder=""
            type=""
            autocomplete=""
            label="First Name"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type=""
            autocomplete=""
            label="Company Name"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type=""
            autocomplete=""
            label="Street Address"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type=""
            autocomplete=""
            label="Apartment, floor, etc. (optional)"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type=""
            autocomplete=""
            label="Town/City"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type="tel"
            autocomplete=""
            label="Phone Number"
            classNameLabel="text-text-1 mb-2"
          />
          <InputField
            placeholder=""
            type="email"
            autocomplete=""
            label="Email Address"
            classNameLabel="text-text-1 mb-2"
          />
          <div className="flex items-center">
            <CheckBox label="Save this information for faster check-out next time" />
          </div>
        </form>
        <div className="w-[32.9375rem] ml-auto">
          <div className="grid grid-cols-1 gap-y-8 w-[26.5625rem] mt-8">
            <div className="flex items-center">
              <div className="mr-6">
                <Image
                  src="/CartItem/Item1.png"
                  width={54}
                  height={54}
                  alt="Picture of cart item"
                />
              </div>
              <div className="cursor-pointer">LCD Monitor</div>
              <div className="ml-auto">$650</div>
            </div>
            <div className="flex items-center">
              <div className="mr-6">
                <Image
                  src="/CartItem/Item2.png"
                  width={54}
                  height={54}
                  alt="Picture of cart item"
                />
              </div>
              <div className="cursor-pointer">H1 Gamepad</div>
              <div className="ml-auto">$1100</div>
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-4 pb-4 border-b-[0.0625rem] border-black border-opacity-50">
                <div>Subtotal:</div>
                <div>$1750</div>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b-[0.0625rem] border-black border-opacity-50">
                <div>Shipping:</div>
                <div>Free</div>
              </div>
              <div className="flex justify-between">
                <div>Total:</div>
                <div>$1750</div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="Bank"
                name="payment"
                className="mr-4 h-6 w-6 accent-black cursor-pointer"
              />
              <label
                htmlFor="Bank"
                className="peer-checked:block cursor-pointer"
              >
                Bank
              </label>
              <span className="ml-auto flex gap-x-2">
                <Image
                  src="/Banks/Bkash.png"
                  width={42}
                  height={28}
                  alt="Picture of cart item"
                />
                <Image
                  src="/Banks/Visa.png"
                  width={42}
                  height={28}
                  alt="Picture of cart item"
                />
                <Image
                  src="/Banks/Mastercard.png"
                  width={42}
                  height={28}
                  alt="Picture of cart item"
                />
                <Image
                  src="/Banks/Nagad.png"
                  width={42}
                  height={28}
                  alt="Picture of cart item"
                />
              </span>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="COD"
                name="payment"
                className="mr-4 h-6 w-6 accent-black cursor-pointer"
              />
              <label
                htmlFor="COD"
                className="peer-checked:block cursor-pointer"
              >
                Cash on delivery
              </label>
            </div>
          </div>
          <form className="flex justify-between my-8">
            <input
              required
              type="text"
              placeholder="Coupon Code"
              className="py-4 px-6 flex-grow mr-4 rounded border-[0.0625rem] border-black border-opacity-50"
            />
            <PrimaryButton type="submit" label="Apply Coupon" />
          </form>
          <div className="w-fit">
            <PrimaryButton form="info" type="submit" label="Place Order" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutSection;
