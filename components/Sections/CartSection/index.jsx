import React from "react";
import { toast } from "react-toastify";
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
    const currentItem = items.find((item) => item.productId === productId);

    if (currentItem && currentItem.quantity < 999) {
      cartStore.increaseQuantity(productId);
    }
  };

  const handleDecrease = (productId) => {
    cartStore.decreaseQuantity(productId);
  };

  const handleRemove = (productId) => {
    cartStore.removeFromCart(productId);
    toast.warn("Removed from Cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
    <div className="container mb-[8.75rem] mt-[5.9375rem]">
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
            <div className="w-[10.625rem] lg:w-[15.625rem] xl:w-fit">
              Product
            </div>
            <div className="hidden lg:mr-[0.75rem] lg:flex">Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {items.length === 0 && (
            <div className="flex justify-center p-3 text-text-1 shadow-custom xl:px-10 xl:py-6">
              Your cart is empty.
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.productId}
              className="flex flex-row items-center justify-between p-3 shadow-custom xl:flex-row xl:justify-end xl:px-10 xl:py-6"
            >
              <div
                className={clsx(
                  s.HoverCancel,
                  "flex max-w-[10.625rem] items-center lg:max-w-[15.625rem] xl:mr-auto xl:max-w-fit",
                )}
              >
                <div className="relative mr-5">
                  <button
                    type="button"
                    className={clsx(
                      s.CancelButton,
                      "absolute left-[-0.8rem] top-[-0.8rem]",
                    )}
                    onClick={() => handleRemove(item.productId)}
                    aria-label="cancelButton"
                  >
                    <Image
                      src="/CancelCircle.svg"
                      width={24}
                      height={24}
                      alt="Picture of cancelButton"
                    />
                  </button>
                  <Image
                    className="max-h-[4.0625rem] min-w-[3.375rem]"
                    src={item.image}
                    width={54}
                    height={54}
                    alt="Picture of cart item"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <Link
                  href={`/${item.category}/${item.productId}`}
                  className="line-clamp-2 cursor-pointer hover:font-semibold hover:italic xl:mr-10"
                >
                  {item.title}
                </Link>
              </div>
              <div className="hidden lg:ml-[0.875rem] lg:flex">
                {formatter(item.price)}
              </div>
              <div className="relative xl:ml-[17.8125rem]">
                <input
                  type="number"
                  className={clsx(
                    s.RemoveArrow,
                    "min-h-[2.75rem] max-w-[4.5rem] rounded border-[0.0625rem] border-black border-opacity-40 px-3 py-[0.375rem]",
                  )}
                  value={item.quantity}
                  onChange={(e) => {
                    let newQuantity = parseInt(e.target.value, 10);

                    newQuantity = Math.min(Math.max(newQuantity, 1), 999);

                    handleUpdateQuantity(item.productId, newQuantity);
                  }}
                  aria-label="Quantity Input"
                />
                <div className="absolute right-3 top-[1rem] -translate-y-1/2">
                  <button
                    type="button"
                    onClick={() => handleIncrease(item.productId)}
                    aria-label="increaseButton"
                  >
                    <ChevronUp size={16} />
                  </button>
                </div>
                <div className="absolute bottom-[-0.8125rem] right-3 -translate-y-1/2">
                  <button
                    type="button"
                    onClick={() => handleDecrease(item.productId)}
                    aria-label="decreaseButton"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="line-clamp-1 flex min-w-[4.1875rem] max-w-[1.1875rem] justify-end overflow-visible xl:ml-[17.8125rem]">
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
