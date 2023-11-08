/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (searchTerm) {
          const filteredResults = response.data.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setSearchResults(filteredResults);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        // console.error("Error fetching search results: ", error);
      }
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        getSearchResults();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

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
              className="h-6 w-full rounded bg-secondary-0 px-[0.875rem] py-[1.25rem] text-xs font-normal"
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleChange}
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarBlur}
            />
            <Search className="absolute right-3 top-2 cursor-pointer" />
            {isSearchBarFocused && searchResults.length > 0 && (
              <div className="absolute top-10 mt-2 flex flex-col rounded border bg-white shadow">
                {searchResults.map((product) => (
                  <span
                    className="cursor-pointer border-b px-4 py-2 hover:font-semibold hover:italic"
                    key={product.id}
                  >
                    {product.title}
                  </span>
                ))}
              </div>
            )}

            {isSearchBarFocused && searchResults.length === 0 && (
              <div className="absolute top-10 mt-2 flex w-full flex-col rounded border bg-white shadow">
                <span className="cursor-default px-4 py-2 text-center opacity-30">
                  No results
                </span>
              </div>
            )}
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
              className="flex w-full items-center justify-between gap-y-4"
            >
              <span className="flex items-center">
                <Layers3 className="mr-3" />
                Top Categories
              </span>
              {!isDropdownOpen ? <ChevronDown /> : <ChevronUp />}
            </button>
            {isDropdownOpen && (
              <ul className="ml-6 mt-4 flex flex-col gap-y-4">
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
            href="/Contact"
            className={clsx(
              !isLinkActive("/Contact") && s.OnHover,
              isLinkActive("/Contact") && s.ActiveLink,
              "flex items-center",
            )}
          >
            <div className="mr-3">
              <Contact />
            </div>
            Contact
          </Link>
          <Link
            href="/About"
            className={clsx(
              !isLinkActive("/About") && s.OnHover,
              isLinkActive("/About") && s.ActiveLink,
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
