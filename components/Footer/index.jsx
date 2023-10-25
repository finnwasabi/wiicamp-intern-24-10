import React from "react";
import IconSend from "../../asset/icons/sendIco.jsx";

function Footer() {
  return (
    <div className="bg-black text-white pt-20 pb-6">
      <div className="container grid gap-[87px] grid-cols-5 grid-rows-1">
        <ul>
          <li className="font-bold text-2xl mb-6">Exclusive</li>
          <li className="text-xl font-medium mb-6">Subscribe</li>
          <li className="mb-4">Get 10% off your first order</li>
          <input
            className="py-3 px-4 bg-black rounded border-solid border-2 border-white text-white w-full"
            type="text"
            placeholder="Enter your email"
          />
        </ul>
        <ul>
          <li className="text-xl mb-6">Support</li>
          <li className="mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </li>
          <li className="mb-4">exclusive@gmail.com</li>
          <li className="mb-4">+88015-88888-9999</li>
        </ul>
        <ul>
          <li className="text-xl mb-6">Account</li>
          <li className="mb-4">My Account</li>
          <li className="mb-4">Login / Register</li>
          <li className="mb-4">Cart</li>
          <li className="mb-4">Wishlist</li>
          <li className="mb-4">Shop</li>
        </ul>
        <ul>
          <li className="text-xl mb-6">Quick Link</li>
          <li className="mb-4">Privacy Policy</li>
          <li className="mb-4">Terms Of Use</li>
          <li className="mb-4">FAQ</li>
          <li className="mb-4">Contact</li>
        </ul>
        <ul>
          <li className="text-xl mb-6">Download App</li>
          <li className="mb-4 text-xs font-medium text-text-1">
            Save $3 with App New User Only
          </li>
        </ul>
      </div>
      <div className="border-t mt-[60px] border-text-1">
        <div className="container text-text-1 flex justify-center pb-0 pt-4">
          <IconSend className="my-auto mx-1" />
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
