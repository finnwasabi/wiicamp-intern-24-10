/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        setIsLoading(true); // Set loading to true when fetching results
        getSearchResults();
      } else {
        setSearchResults([]);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setIsLoading]);

  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

  return (
    <div className="fixed z-50 w-full border-b border-black border-opacity-30 bg-white pb-4">
      <div className="container relative mt-10 py-0">
        <div className="flex max-h-[2.375rem] items-center justify-between">
          <span className="flex min-w-[7.375rem] cursor-default items-center gap-x-2 text-2xl font-bold leading-6 xl:mr-[10rem]">
            <button
              type="button"
              className="xl:hidden"
              onClick={handleMenuClick}
            >
              <Menu />
            </button>
            Exclusive
          </span>
          <div className="mr-[8.125rem] hidden min-w-[22.9375rem] xl:flex">
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
            <Link
              href="/Contact"
              className={clsx(
                !isLinkActive("/Contact") && s.OnHover,
                isLinkActive("/Contact") && s.ActiveLink,
                "mr-12",
              )}
            >
              Contact
            </Link>
            <Link
              href="/About"
              className={clsx(
                !isLinkActive("/About") && s.OnHover,
                isLinkActive("/About") && s.ActiveLink,
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
          <form className="relative hidden md:flex xl:flex">
            <input
              className="h-6 min-w-[15.1875rem] rounded bg-secondary-0 px-[0.875rem] py-[1.25rem] text-xs font-normal"
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleChange}
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarBlur}
              required
            />
            <Link href="/SearchResults" type="submit">
              <Search className="absolute right-3 top-2" />
            </Link>
            {isSearchBarFocused && searchResults.length > 0 && !isLoading && (
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
            {isLoading && (
              <div className="absolute top-10 mt-2 flex h-[42px] w-full flex-col items-center justify-center rounded border bg-white shadow">
                <CircularProgress size={20} />
              </div>
            )}
            {isSearchBarFocused && searchResults.length === 0 && !isLoading && (
              <div className="absolute top-10 mt-2 flex w-full flex-col rounded border bg-white shadow">
                <span className="cursor-default px-4 py-2 text-center opacity-30">
                  No results
                </span>
              </div>
            )}
          </form>
          <div className="flex">
            {show3icons && (
              <div className="flex items-center gap-4 xl:ml-6">
                <Link
                  href="/Wishlist"
                  className={clsx(
                    s.ThreeBoxes,
                    isLinkActive("/Wishlist") && s.ThreeBoxesFocus,
                  )}
                >
                  <Heart
                    size={32}
                    absoluteStrokeWidth
                    className={s.ThreeIcons}
                  />
                </Link>
                <Link
                  href="/Cart"
                  className={clsx(
                    s.ThreeBoxes,
                    isLinkActive("/Cart") && s.ThreeBoxesFocus,
                  )}
                >
                  <ShoppingCart
                    size={32}
                    absoluteStrokeWidth
                    className={s.ThreeIcons}
                  />
                </Link>
                <button onClick={handleUserClick} className={s.ThreeBoxes}>
                  {isDropdownOpen ? (
                    <Image
                      src="/UserCircle.svg"
                      width={32}
                      height={32}
                      alt="user activated"
                      className="rounded-full shadow-lg"
                    />
                  ) : (
                    <User
                      size={32}
                      absoluteStrokeWidth
                      className={s.ThreeIcons}
                    />
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
      )}
    </div>
  );
}
Header.propTypes = {
  show3icons: PropTypes.bool.isRequired,
};

export default Header;
