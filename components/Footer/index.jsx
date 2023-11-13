import React from "react";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";

import IconSend from "../../asset/icons/sendIco.jsx";

import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className="bg-black pb-6 pt-20 text-white">
      <div className="container grid justify-center gap-x-[5.4375rem] gap-y-[3rem] text-center sm:grid-cols-2 md:grid-cols-2 xl:flex xl:text-left">
        <ul
          className={clsx(
            s.FooterList,
            "ml-auto mr-auto flex max-w-[13.5625rem] flex-col items-center xl:block",
          )}
        >
          <div className="mb-6 text-2xl font-bold">Exclusive</div>
          <li className="mb-6 text-xl font-medium">Subscribe</li>
          <li className="mb-4">Get 10% off your first order</li>
          <form className="relative">
            <input
              className="w-full rounded border-2 border-solid border-white bg-black px-4 py-3 text-white"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="absolute right-[0.9375rem] top-[0.875rem]"
            >
              <Image
                src="/SendIcon.svg"
                width={24}
                height={24}
                alt="Picture of the send btn"
              />
            </button>
          </form>
        </ul>
        <ul
          className={clsx(
            s.FooterList,
            "ml-auto mr-auto flex max-w-[10.9375rem] flex-col items-center xl:block",
          )}
        >
          <div className="mb-6 text-xl">Support</div>
          <li className="mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </li>
          <li className="mb-4">
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          </li>
          <li className="mb-4">
            <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </li>
        </ul>
        <ul
          className={clsx(
            s.FooterList,
            "ml-auto mr-auto flex min-w-[7.6875rem] flex-col items-center xl:block",
          )}
        >
          <div className="mb-6 text-xl">Account</div>
          <li className="mb-4">
            <Link href="/my-account">My Account</Link>
          </li>
          <li className="mb-4">
            <Link href="/account/sign-up">Login / Register</Link>
          </li>
          <li className="mb-4">
            <Link href="/checkout">Checkout</Link>
          </li>
          <li className="mb-4">
            <Link href="/wishlist">Wishlist</Link>
          </li>
          <li className="mb-4">Shop</li>
        </ul>
        <ul
          className={clsx(
            s.FooterList,
            "ml-auto mr-auto flex min-w-[6.8125rem] flex-col items-center xl:block",
          )}
        >
          <div className="mb-6 text-xl">Quick Link</div>
          <li className="mb-4">Privacy Policy</li>
          <li className="mb-4">Terms Of Use</li>
          <li className="mb-4">FAQ</li>
          <li className="mb-4">Contact</li>
        </ul>
        <ul className="ml-auto mr-auto flex max-w-[12.375rem] flex-col items-center sm:col-span-2 md:col-span-2 xl:block">
          <li className="cols mb-6 cursor-default text-xl">Download App</li>
          <li className="mb-[0.625rem] text-xs font-medium text-text-1">
            Save $3 with App New User Only
          </li>
          <div className="mb-6 flex items-center gap-x-2">
            <Image
              className="max-h-[5rem]"
              src="/Footer/QRcode.png"
              width={80}
              height={80}
              alt="Picture of the downloads"
            />
            <div className="flex flex-col gap-y-1">
              <Image
                className="min-w-[110px] cursor-pointer"
                src="/Footer/GooglePlay.png"
                width={110}
                height={40}
                alt="Picture of the downloads"
              />
              <Image
                className="min-w-[110px] cursor-pointer"
                src="/Footer/AppStore.png"
                width={110}
                height={40}
                alt="Picture of the downloads"
              />
            </div>
          </div>
          <li className={clsx(s.FooterList, "flex gap-x-6")}>
            <Link href="https://www.facebook.com/">
              <Facebook />
            </Link>
            <Link href="https://twitter.com/">
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com/">
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/">
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-[3.75rem] border-t border-primary-0 border-opacity-5">
        <div className="container flex justify-center pb-0 pt-4 text-text-1">
          <IconSend className="mx-1 my-auto" />
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
