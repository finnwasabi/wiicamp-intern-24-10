/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
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

  // const debouncedSearch = useRef(
  //   debounce(async (term) => {
  //     if (term) {
  //       try {
  //         const response = await axios.get(
  //           `https://fakestoreapi.com/products?title=${term}`,
  //         );
  //         setSearchResults(response.data);
  //       } catch (error) {
  //         console.error("Error fetching search results: ", error);
  //       }
  //     } else {
  //       setSearchResults([]);
  //     }
  //   }, 1000),
  // ).current;

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // debouncedSearch(term);
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
          <form className="hidden relative xl:flex md:flex">
            <input
              className="font-normal text-xs py-[1.25rem] px-[0.875rem] h-6 min-w-[15.1875rem] bg-secondary-0 rounded"
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleChange}
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarBlur}
              required
            />
            <button type="submit">
              <Search className="absolute right-3 top-2" />
            </button>
            {isSearchBarFocused && searchResults.length > 0 && (
              <div className="mt-2 absolute flex flex-col bg-white rounded shadow top-10 border">
                {searchResults.map((product) => (
                  <span
                    className="px-4 py-2 cursor-pointer border-b hover:font-semibold hover:italic"
                    key={product.id}
                  >
                    {product.title}
                  </span>
                ))}
              </div>
            )}

            {isSearchBarFocused && searchResults.length === 0 && (
              <div className="mt-2 absolute flex flex-col bg-white rounded shadow top-10 border w-full">
                <span className="px-4 py-2 cursor-default opacity-30 text-center">
                  No results
                </span>
              </div>
            )}
          </form>
          <div className="flex">
            {show3icons && (
              <div className="flex gap-4 xl:ml-6 items-center">
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
                      className="shadow-lg rounded-full"
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
