/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  ChevronDown,
  ChevronUp,
  Contact,
  Home,
  Info,
  Layers3,
  Search,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import s from "./SideMenu.module.scss";

function SideMenu({ isSideMenuOpen, closeSideMenu }) {
  const sideMenuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        closeSideMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeSideMenu]);

  const isLinkActive = (href) => router.pathname === href;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={s.sideMenuContainer}>
      <div
        className={s.overlay}
        style={{ display: isSideMenuOpen ? "block" : "none" }}
        onClick={closeSideMenu}
      />
      <div
        className={isSideMenuOpen ? s.sideMenuContentActive : s.sideMenuContent}
        ref={sideMenuRef}
      >
        <div className="flex flex-col gap-y-4">
          <div className="relative md:hidden">
            <input
              className="font-normal text-xs py-[1.25rem] px-[0.875rem] h-6 w-full bg-secondary-0 rounded"
              type="text"
              placeholder="What are you looking for?"
            />
            <Search className="absolute right-3 top-2 cursor-pointer" />
          </div>
          <Link
            href="/"
            className={clsx(
              !isLinkActive("/") && s.OnHover,
              isLinkActive("/") && s.ActiveLink,
              "flex items-center",
            )}
          >
            <div className="mr-3">
              <Home />
            </div>
            Home
          </Link>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              type="button"
              className="flex items-center gap-y-4 w-full justify-between"
            >
              <span className="flex items-center">
                <Layers3 className="mr-3" />
                Top Categories
              </span>
              {!isDropdownOpen ? <ChevronDown /> : <ChevronUp />}
            </button>
            {isDropdownOpen && (
              <ul className="flex flex-col gap-y-4 mt-4 ml-6">
                <li>Woman&apos;s Fashion</li>
                <li>Men&apos;s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby&apos;s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            )}
          </div>
          <Link
            href="/contact"
            className={clsx(
              !isLinkActive("/contact") && s.OnHover,
              isLinkActive("/contact") && s.ActiveLink,
              "flex items-center",
            )}
          >
            <div className="mr-3">
              <Contact />
            </div>
            Contact
          </Link>
          <Link
            href="/about"
            className={clsx(
              !isLinkActive("/about") && s.OnHover,
              isLinkActive("/about") && s.ActiveLink,
              "flex items-center",
            )}
          >
            <div className="mr-3">
              <Info />
            </div>
            About
          </Link>
          <Link
            href="/account/sign-up"
            className={clsx(
              isLinkActive("/account/sign-up") && s.ActiveLink,
              !isLinkActive("/account/sign-up") && s.OnHover,
              "flex items-center",
            )}
          >
            <div className="mr-3">
              <UserPlus />
            </div>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  closeSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
