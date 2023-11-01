/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Heart, ShoppingCart, User, UserCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import DropdownAccount from "../Sections/DropdownAccount";

import s from "./Header.module.scss";

function Header({ show3icons }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const isLinkActive = (href) => router.pathname === href;

  return (
    <div className="pb-4 border-b border-black border-opacity-30">
      <div className="container mt-10 py-0 relative">
        <div className="flex h-[38px] items-center justify-between">
          <span className="min-w-[118px] mr-[160px] font-bold text-2xl leading-6 cursor-default">
            Exclusive
          </span>
          <div className="mr-[8.125rem] min-w-[367px]">
            <Link
              href="/"
              className={clsx(
                !isLinkActive("/") && s.OnHover,
                isLinkActive("/") && s.ActiveLink,
                "mr-12",
              )}
            >
              Home
            </Link>
            <span className={clsx(s.OnHover, "mr-12 cursor-pointer")}>
              Contact
            </span>
            <Link
              href="/about"
              className={clsx(
                !isLinkActive("/about") && s.OnHover,
                isLinkActive("/about") && s.ActiveLink,
                "mr-12",
              )}
            >
              About
            </Link>
            <Link
              href="/account/sign-up"
              className={clsx(
                isLinkActive("/account/sign-up") && s.ActiveLink,
                !isLinkActive("/account/sign-up") && s.OnHover,
              )}
            >
              Sign up
            </Link>
          </div>
          <div className="flex">
            <div className="flex relative">
              <input
                className="font-normal mr-6 text-xs py-[20px] px-[14px] h-6 min-w-[243px] bg-secondary-0 rounded"
                type="text"
                placeholder="What are you looking for?"
              />
              <svg
                className="absolute right-9 top-[8px] cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {show3icons && (
              <div className="flex gap-4 items-center">
                <Link href="/wishlist">
                  <Heart size={32} absoluteStrokeWidth />
                </Link>
                <Link href="/cart">
                  <ShoppingCart size={32} absoluteStrokeWidth />
                </Link>
                <button onClick={handleUserClick}>
                  {isDropdownOpen ? (
                    <UserCircle size={32} absoluteStrokeWidth />
                  ) : (
                    <User size={32} absoluteStrokeWidth />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
        <div ref={dropdownRef}>{isDropdownOpen && <DropdownAccount />}</div>
      </div>
    </div>
  );
}
Header.propTypes = {
  show3icons: PropTypes.bool.isRequired,
};
export default Header;
