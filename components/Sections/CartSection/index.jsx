import React from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

import useCartStore from "@/stores/cartStore";
import formatter from "@/utils/formatter";

import s from "./CartSection.module.scss";

function CartSection() {
  const cartStore = useCartStore();
  const { items } = cartStore;

  const handleIncrease = (productId) => {
    cartStore.increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    cartStore.decreaseQuantity(productId);
  };

  const handleRemove = (productId) => {
    cartStore.removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    cartStore.updateQuantity(productId, newQuantity);
  };

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
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <span className="text-text-1">/</span>
        <span className="cursor-default">Cart</span>
      </div>
      <div className="mb-20">
        <div className="mb-6 grid gap-y-10">
          <div className="flex justify-between p-3 shadow-custom xl:px-10 xl:py-6">
            <div className="w-[170px] xl:w-fit">Product</div>
            <div className="hidden xl:mr-[12px] xl:flex">Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex flex-row items-center justify-between p-3 shadow-custom xl:flex-row xl:justify-end xl:px-10 xl:py-6"
            >
              <div className="flex max-w-[10.625rem] items-center xl:mr-auto xl:max-w-fit">
                <div className={clsx(s.HoverCancel, "relative mr-5")}>
                  <button
                    type="button"
                    className={clsx(
                      s.CancelButton,
                      "absolute left-[-0.8rem] top-[-0.8rem]",
                    )}
                    onClick={() => handleRemove(item.productId)}
                  >
                    <Image
                      src="/CancelCircle.svg"
                      width={24}
                      height={24}
                      alt="Picture of cancelButton"
                    />
                  </button>
                  <Image
                    className="max-h-[65px] min-w-[3.375rem]"
                    src={item.image}
                    width={54}
                    height={54}
                    alt="Picture of cart item"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="line-clamp-2 cursor-pointer lg:mr-10">
                  {item.title}
                </div>
              </div>
              <div className="hidden xl:flex">{formatter(item.price)}</div>
              <div className="relative xl:ml-[17.8125rem]">
                <input
                  type="number"
                  className={clsx(
                    s.RemoveArrow,
                    "min-h-[2.75rem] max-w-[4.5rem] rounded border-[0.0625rem] border-black border-opacity-40 px-3 py-[0.375rem]",
                  )}
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.productId, e.target.value)
                  }
                />
                <div className="absolute right-3 top-[1rem] -translate-y-1/2">
                  <button
                    type="button"
                    onClick={() => handleIncrease(item.productId)}
                  >
                    <ChevronUp size={16} />
                  </button>
                </div>
                <div className="absolute bottom-[-0.8125rem] right-3 -translate-y-1/2">
                  <button
                    type="button"
                    onClick={() => handleDecrease(item.productId)}
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex min-w-[4.1875rem] justify-end xl:ml-[17.8125rem]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden justify-between xl:flex">
          <Link href="/">
            <SecondaryButton label="Return To Shop" />
          </Link>
          <SecondaryButton label="Update Cart" />
        </div>
      </div>
      <div className="flex min-h-[20.25rem] flex-col xl:flex-row">
        <form className="flex max-h-[3.5rem] gap-x-4">
          <input
            required
            type="text"
            placeholder="Coupon Code"
            className="w-full max-w-[18.75rem] rounded border-2 border-black border-opacity-50 px-6 py-4 xl:pl-6 xl:pr-[4.375rem]"
          />
          <div className="mr-[10.8125rem] hidden xl:block">
            <PrimaryButton type="submit" label="Apply Coupon" />
          </div>
          <div className="xl:hidden">
            <PrimaryButton type="submit" label="Apply" />
          </div>
        </form>
        <div className="mt-6 rounded border-2 border-black border-opacity-70 px-6 py-8 xl:mt-0 xl:min-w-[29.375rem]">
          <div className="mb-6 text-xl font-semibold">Cart Total</div>
          <div className="mb-4 flex justify-between border-b-[0.0625rem] border-black border-opacity-50 pb-4">
            <div>Subtotal:</div>
            <div>{getTotalPrice()}</div>
          </div>
          <div className="mb-4 flex justify-between border-b-[0.0625rem] border-black border-opacity-50 pb-4">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div className="mb-4 flex justify-between">
            <div>Total:</div>
            <div>{getTotalPrice()}</div>
          </div>
          <Link href="/checkout">
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
