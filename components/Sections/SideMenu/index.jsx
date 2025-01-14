/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";
import {
  ChevronDown,
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

import useAuthStore from "@/stores/authStore";

import s from "./SideMenu.module.scss";

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen }) {
  const authStore = useAuthStore();
  const sideMenuRef = useRef(null);
  const router = useRouter();
  const isLinkActive = (href) => router.pathname === href;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef(null);
  const ulBlock = useRef(null);
  const [ulHeight, setUlHeight] = useState(0);
  const additionalMoveUp = 16;

  useEffect(() => {
    if (ulBlock.current) {
      const height = ulBlock.current.clientHeight;
      setUlHeight(height + additionalMoveUp);
    }
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      if (ulBlock.current) {
        const height = ulBlock.current.clientHeight;
        setUlHeight(height + additionalMoveUp);
      }
    }
  }, [isDropdownOpen]);
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
        setIsLoading(true);
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

  const handleSearchResultClick = (product) => {
    router.push({
      pathname: `/${product.category}/${product.id}`,
    });
    setIsSideMenuOpen(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      router.push({
        pathname: "/search-results",
        query: { keyword: searchTerm },
      });
      setIsSideMenuOpen(false);
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  const handleIconSearchClick = () => {
    router.push({
      pathname: "/search-results",
      query: { keyword: searchTerm },
    });
    setIsSideMenuOpen(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  const handleMenuClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className={clsx(s.sideMenuContainer, isSideMenuOpen && s.Active)}>
      <div
        className={clsx(s.overlay, isSideMenuOpen && s.Active)}
        onClick={() => {
          setIsSideMenuOpen(false);
        }}
      />
      <div
        className={clsx(s.sideMenuContent, isSideMenuOpen && s.Active)}
        ref={sideMenuRef}
      >
        <div className="flex flex-col gap-y-4">
          <div className="relative md:hidden">
            <input
              ref={searchInputRef}
              className="h-6 w-full rounded bg-secondary-0 px-[0.875rem] py-[1.25rem] text-xs font-normal"
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleChange}
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarBlur}
              onKeyDown={handleKeyPress}
              required
              aria-label="Search"
            />
            <Search
              className="absolute right-3 top-2 cursor-pointer"
              onClick={handleIconSearchClick}
            />
            {isSearchBarFocused && searchResults.length > 0 && !isLoading && (
              <div className="absolute top-10 mt-2 flex flex-col rounded border bg-white shadow">
                {searchResults.map((product) => (
                  <button
                    type="button"
                    className="border-b px-4 py-2 text-left hover:font-semibold hover:italic"
                    key={product.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSearchResultClick(product);
                    }}
                    aria-label="Search"
                  >
                    <p className="line-clamp-2">{product.title}</p>
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="absolute top-10 mt-2 flex h-[2.625rem] w-full flex-col items-center justify-center rounded border bg-white shadow">
                <CircularProgress color="inherit" size={25} />
              </div>
            )}
            {isSearchBarFocused && searchResults.length === 0 && !isLoading && (
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
            onClick={handleMenuClick}
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
              aria-label="Top Categories"
            >
              <span className="flex items-center">
                <Layers3 className="mr-3" />
                Top Categories
              </span>
              {!isDropdownOpen ? (
                <ChevronDown className="rotate-[-180] transition-all" />
              ) : (
                <ChevronDown className="rotate-180 transition-all" />
              )}
            </button>
            <div className="overflow-hidden">
              <ul
                ref={ulBlock}
                className={`ml-6 mt-4 flex flex-col gap-y-4 ${
                  isDropdownOpen
                    ? "transition-all"
                    : "invisible translate-y-[-100%] opacity-0 transition-all"
                }`}
              >
                <li>
                  <Link onClick={handleMenuClick} href="/women's%20clothing">
                    Woman&apos;s Fashion
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/men's%20clothing">
                    Men&apos;s Fashion
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/electronics">
                    Electronics
                  </Link>
                </li>
                <Link onClick={handleMenuClick} href="/jewelery">
                  Jewelery
                </Link>
                <li>
                  <Link onClick={handleMenuClick} href="/404">
                    Medicine
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/404">
                    Sports & Outdoor
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/404">
                    Baby&apos;s & Toys
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/404">
                    Groceries & Pets
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenuClick} href="/404">
                    Health & Beauty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`flex flex-col gap-y-4 ${
              isDropdownOpen ? "transition-all" : ""
            }`}
            style={{
              transform: `translateY(${isDropdownOpen ? 0 : -ulHeight}px)`,
            }}
          >
            <Link
              href="/contact"
              className={clsx(
                !isLinkActive("/contact") && s.OnHover,
                isLinkActive("/contact") && s.ActiveLink,
                "flex items-center",
              )}
              onClick={handleMenuClick}
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
              onClick={handleMenuClick}
            >
              <div className="mr-3">
                <Info />
              </div>
              About
            </Link>
          </div>
          {!authStore.isAuthenticated && (
            <Link
              href="/account/sign-up"
              className={clsx(
                isLinkActive("/account/sign-up") && s.ActiveLink,
                !isLinkActive("/account/sign-up") && s.OnHover,
                "flex items-center",
              )}
              onClick={handleMenuClick}
            >
              <div className="mr-3">
                <UserPlus />
              </div>
              Sign up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  setIsSideMenuOpen: PropTypes.func.isRequired,
};

export default SideMenu;
