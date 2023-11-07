import React from "react";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";

import IconSend from "../../asset/icons/sendIco.jsx";

import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className="bg-black text-white pt-20 pb-6">
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-2 text-center xl:text-left container xl:flex gap-x-[5.4375rem] gap-y-[3rem]">
        <ul
          className={clsx(
            s.FooterList,
            "flex flex-col items-center xl:block max-w-[13.5625rem] mr-auto ml-auto",
          )}
        >
          <div className="font-bold text-2xl mb-6">Exclusive</div>
          <li className="text-xl font-medium mb-6">Subscribe</li>
          <li className="mb-4">Get 10% off your first order</li>
          <form className="relative">
            <input
              className="py-3 px-4 bg-black rounded border-solid border-2 border-white text-white w-full"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="absolute top-[0.875rem] right-[0.9375rem]"
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
            "max-w-[10.9375rem] flex flex-col items-center xl:block ml-auto mr-auto",
          )}
        >
          <div className="text-xl mb-6">Support</div>
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
            "min-w-[7.6875rem] flex flex-col items-center xl:block ml-auto mr-auto",
          )}
        >
          <div className="text-xl mb-6">Account</div>
          <li className="mb-4">
            <Link href="/MyAccount">My Account</Link>
          </li>
          <li className="mb-4">
            <Link href="/account/sign-up">Login / Register</Link>
          </li>
          <li className="mb-4">
            <Link href="/Cart">Cart</Link>
          </li>
          <li className="mb-4">
            <Link href="/Wishlist">Wishlist</Link>
          </li>
          <li className="mb-4">Shop</li>
        </ul>
        <ul
          className={clsx(
            s.FooterList,
            "min-w-[6.8125rem] flex flex-col items-center xl:block ml-auto mr-auto",
          )}
        >
          <div className="text-xl mb-6">Quick Link</div>
          <li className="mb-4">Privacy Policy</li>
          <li className="mb-4">Terms Of Use</li>
          <li className="mb-4">FAQ</li>
          <li className="mb-4">Contact</li>
        </ul>
        <ul className="md:col-span-2 sm:col-span-2 max-w-[12.375rem] flex flex-col items-center xl:block ml-auto mr-auto">
          <li className="text-xl mb-6 cols cursor-default">Download App</li>
          <li className="mb-[0.625rem] text-xs font-medium text-text-1">
            Save $3 with App New User Only
          </li>
          <div className="flex items-center gap-x-2 mb-6">
            <Image
              className="max-h-[5rem]"
              src="/Footer/QRcode.png"
              width={80}
              height={80}
              alt="Picture of the downloads"
            />
            <div className="flex flex-col gap-y-1">
              <Image
                className="cursor-pointer min-w-[110px]"
                src="/Footer/GooglePlay.png"
                width={110}
                height={40}
                alt="Picture of the downloads"
              />
              <Image
                className="cursor-pointer min-w-[110px]"
                src="/Footer/AppStore.png"
                width={110}
                height={40}
                alt="Picture of the downloads"
              />
            </div>
          </div>
          <li className={clsx(s.FooterList, "flex gap-x-6")}>
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </li>
        </ul>
      </div>
      <div className="border-t mt-[3.75rem] border-primary-0 border-opacity-5">
        <div className="container text-text-1 flex justify-center pb-0 pt-4">
          <IconSend className="my-auto mx-1" />
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
