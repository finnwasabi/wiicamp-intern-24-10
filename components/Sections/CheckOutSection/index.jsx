/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import CheckBox from "@/components/Buttons/CheckBox";
import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import useCartStore from "@/stores/cartStore";
import formatter from "@/utils/formatter";

function CheckOutSection() {
  const cartStore = useCartStore();
  const { items } = cartStore;

  const getTotalPrice = () => {
    const totalAmount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const newFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return newFormatter.format(totalAmount);
  };

  return (
    <div className="container mb-[8.75rem]">
      <div className="flex gap-3 py-20">
        <span className="hidden cursor-default text-text-1 lg:flex">
          Account
        </span>
        <span className="hidden cursor-default text-text-1 lg:flex">/</span>
        <Link href="/my-account" className="hidden text-text-1 lg:flex">
          My Account
        </Link>
        <span className="hidden cursor-default text-text-1 lg:flex ">/</span>
        <span className="hidden cursor-default text-text-1 lg:flex ">
          Product
        </span>
        <span className="cursor-default text-text-1 lg:hidden">...</span>
        <span className="cursor-default text-text-1">/</span>
        <Link href="/cart" className="text-text-1">
          View Cart
        </Link>
        <span className="cursor-default text-text-1">/</span>
        <span className="cursor-default">CheckOut</span>
      </div>
      <div className="pb-20 text-4xl font-semibold leading-[1.875rem]">
        Billing Details
      </div>
      <div className="justify-between lg:grid lg:grid-cols-2">
        <form
          id="info"
          className="mb-6 grid grid-cols-1 gap-y-8 lg:w-[29.375rem]"
        >
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
        <div className="lg:ml-auto lg:w-[32.9375rem]">
          <div className="mt-20 grid gap-y-8 lg:mt-8 lg:w-[26.5625rem] lg:grid-cols-1">
            {items.map((item) => (
              <div key={item.productId} className="flex items-center">
                <div className="mr-6">
                  <Image
                    src={item.image}
                    width={54}
                    height={54}
                    alt="Picture of cart item"
                    className="max-h-[3.375rem] min-w-[3.375rem]"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="mr-10 line-clamp-2">{item.title}</div>
                <div className="ml-auto">
                  {formatter(item.price * item.quantity)}
                </div>
              </div>
            ))}
            <div className="w-full">
              <div className="mb-4 flex justify-between border-b-[0.0625rem] border-black border-opacity-50 pb-4">
                <div>Subtotal:</div>
                <div>{getTotalPrice()}</div>
              </div>
              <div className="mb-4 flex justify-between border-b-[0.0625rem] border-black border-opacity-50 pb-4">
                <div>Shipping:</div>
                <div>Free</div>
              </div>
              <div className="flex justify-between">
                <div>Total:</div>
                <div>{getTotalPrice()}</div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <input
                type="radio"
                id="Bank"
                name="payment"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <label
                htmlFor="Bank"
                className="cursor-pointer peer-checked:block"
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
            <div className="flex gap-x-4">
              <input
                type="radio"
                id="COD"
                name="payment"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <label
                htmlFor="COD"
                className="cursor-pointer peer-checked:block"
              >
                Cash on delivery
              </label>
            </div>
          </div>
          <form className="my-8 flex justify-between gap-x-4">
            <input
              required
              type="text"
              placeholder="Coupon Code"
              className="px max-h-[3.5rem] w-full flex-grow rounded border-[0.0625rem] border-black border-opacity-50 p-3 lg:w-auto lg:px-6 lg:py-4"
            />
            <div className="hidden lg:block">
              <PrimaryButton type="submit" label="Apply Coupon" />
            </div>
            <div className="lg:hidden">
              <PrimaryButton type="submit" label="Apply" />
            </div>
          </form>
          <Link href="/success" className="lg:w-fit">
            <PrimaryButton form="info" type="submit" label="Place Order" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckOutSection;
