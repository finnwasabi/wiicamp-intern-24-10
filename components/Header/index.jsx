/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import DropdownAccount from "../Sections/DropdownAccount";
import SideMenu from "../Sections/SideMenu";

import s from "./Header.module.scss";

function Header({ show3icons }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
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

  const handleMenuClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
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
    <div className="fixed bg-white z-50 w-full pb-4 border-b border-black border-opacity-30">
      <div className="container mt-10 py-0 relative">
        <div className="flex max-h-[2.375rem] items-center justify-between">
          <span className="flex items-center gap-x-2 min-w-[7.375rem] xl:mr-[10rem] font-bold text-2xl leading-6 cursor-default">
            <button
              type="button"
              className="xl:hidden"
              onClick={handleMenuClick}
            >
              <Menu />
            </button>
            Exclusive
          </span>
          <div className="hidden mr-[8.125rem] min-w-[22.9375rem] xl:flex">
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
          <div className="hidden relative xl:flex md:flex">
            <input
              className="font-normal text-xs py-[1.25rem] px-[0.875rem] h-6 min-w-[15.1875rem] bg-secondary-0 rounded"
              type="text"
              placeholder="What are you looking for?"
            />
            <Search className="absolute right-3 top-2 cursor-pointer" />
          </div>
          <div className="flex">
            {show3icons && (
              <div className="flex gap-4 xl:ml-6 items-center">
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
      {isSideMenuOpen && (
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          closeSideMenu={closeSideMenu}
        />
      )}{" "}
    </div>
  );
}
Header.propTypes = {
  show3icons: PropTypes.bool.isRequired,
};
export default Header;
