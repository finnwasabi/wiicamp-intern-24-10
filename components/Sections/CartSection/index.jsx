import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

import s from "./CartSection.module.scss";

function CartSection() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity, setQuantity] = useState(2);

  const handleIncrease1 = () => {
    setQuantity1(Number(quantity1) + 1);
  };
  const handleDecrease1 = () => {
    setQuantity1(Number(quantity1) - 1);
  };

  const handleIncrease = () => {
    setQuantity(Number(quantity) + 1);
  };
  const handleDecrease = () => {
    setQuantity(Number(quantity) - 1);
  };
  return (
    <div className="container py-0 mb-[8.75rem]">
      <div className="flex gap-3 my-20">
        <div className="text-text-1">Home</div>
        <div className="text-text-1">/</div>
        <div>Cart</div>
      </div>
      <div className="mb-20">
        <div className="grid gap-y-10 mb-6">
          <div className="flex shadow-custom justify-between py-6 px-10">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          <div className="flex justify-end shadow-custom items-center py-6 px-10">
            <div className="mr-auto flex items-center">
              <div className={clsx(s.HoverCancel, "mr-5 relative")}>
                <button
                  type="button"
                  className={clsx(s.CancelButton, "absolute left-[-0.375rem]")}
                >
                  <Image
                    src="/CancelCircle.svg"
                    width={24}
                    height={24}
                    alt="Picture of cancelButton"
                  />
                </button>
                <Image
                  src="/CartItem/Item1.png"
                  width={54}
                  height={54}
                  alt="Picture of cart item"
                />
              </div>
              <div className="cursor-pointer">LCD Monitor</div>
            </div>
            <div>$650</div>
            <div className="relative ml-[17.8125rem]">
              <input
                type="number"
                className={clsx(
                  s.RemoveArrow,
                  "py-[0.375rem] px-3 max-w-[4.5rem] min-h-[2.75rem] border-[0.0625rem] rounded border-black border-opacity-40",
                )}
                value={quantity1}
                onChange={(e) => setQuantity1(e.target.value)}
              />
              <div className="absolute top-[1rem] -translate-y-1/2 right-3">
                <button type="button" onClick={handleIncrease1}>
                  <ChevronUp size={16} />
                </button>
              </div>
              <div className="absolute bottom-[-0.8125rem] -translate-y-1/2 right-3">
                <button type="button" onClick={handleDecrease1}>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="ml-[17.8125rem] min-w-[4.1875rem] flex justify-end">
              ${650 * quantity1}
            </div>
          </div>
          <div className="flex justify-end shadow-custom items-center py-6 px-10">
            <div className="mr-auto flex items-center">
              <div className={clsx(s.HoverCancel, "mr-5 relative")}>
                <button
                  type="button"
                  className={clsx(s.CancelButton, "absolute left-[-0.375rem]")}
                >
                  <Image
                    src="/CancelCircle.svg"
                    width={24}
                    height={24}
                    alt="Picture of cancelButton"
                  />
                </button>
                <Image
                  src="/CartItem/Item2.png"
                  width={54}
                  height={54}
                  alt="Picture of cart item"
                />
              </div>
              <div className="cursor-pointer">H1 Gamepad</div>
            </div>
            <div>$550</div>
            <div className="relative ml-[17.8125rem]">
              <input
                type="number"
                className={clsx(
                  s.RemoveArrow,
                  "py-[0.375rem] px-3 max-w-[4.5rem] min-h-[2.75rem] border-[0.0625rem] rounded border-black border-opacity-40",
                )}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="absolute top-[1rem] -translate-y-1/2 right-3">
                <button type="button" onClick={handleIncrease}>
                  <ChevronUp size={16} />
                </button>
              </div>
              <div className="absolute bottom-[-0.8125rem] -translate-y-1/2 right-3">
                <button type="button" onClick={handleDecrease}>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="ml-[17.8125rem] min-w-[4.1875rem] flex justify-end">
              ${550 * quantity}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/">
            <SecondaryButton label="Return To Shop" />
          </Link>
          <SecondaryButton label="Update Cart" />
        </div>
      </div>
      <div className="flex min-h-[20.25rem]">
        <form className="flex max-h-[3.5rem]">
          <input
            required
            type="text"
            placeholder="Coupon Code"
            className="rounded max-w-[18.75rem] py-4 pl-6 pr-[4.375rem] mr-4 border-2 border-black border-opacity-50"
          />
          <div className="mr-[10.8125rem] min-w-[13.1875rem]">
            <PrimaryButton type="submit" label="Apply Coupon" />
          </div>
        </form>
        <div className="min-w-[29.375rem] py-8 px-6 border-2 rounded border-black border-opacity-70">
          <div className="font-semibold text-xl mb-6">Cart Total</div>
          <div className="flex justify-between mb-4 pb-4 border-b-[0.0625rem] border-black border-opacity-50">
            <div>Subtotal:</div>
            <div> ${550 * quantity + 650 * quantity1}</div>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b-[0.0625rem] border-black border-opacity-50">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div className="flex justify-between mb-4">
            <div>Total:</div>
            <div> ${550 * quantity + 650 * quantity1}</div>
          </div>
          <Link href="/Checkout">
            <div className="flex justify-center">
              <PrimaryButton label="Proceed to checkout" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
