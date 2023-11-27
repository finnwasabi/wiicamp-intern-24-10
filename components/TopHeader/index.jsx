import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function TopHeader() {
  const topHeader = useRef(null);
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageClick = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  useEffect(() => {
    if (topHeader.current) {
      setTopHeaderHeight(topHeader.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <div ref={topHeader} className="container relative py-3">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-center xl:block">
            <span className="text-sm xl:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              href="/404"
              className="cursor-pointer px-2 underline xl:font-semibold"
            >
              ShopNow
            </Link>
          </div>
          <div className="xl:top1/2 absolute bottom-0 right-0 mr-3 flex -translate-y-1/2 ">
            <span className="hidden xl:block">English</span>
            <button type="button" onClick={handleLanguageClick}>
              {isLanguageDropdownOpen ? (
                <ChevronDown className="rotate-180 transition-all" />
              ) : (
                <ChevronDown className="rotate-[-180] transition-all" />
              )}
            </button>
          </div>
        </div>
        <span
          className={`absolute right-[12px] mt-1 top-[${topHeaderHeight}px] z-[200] flex w-fit flex-col gap-y-2 rounded bg-black p-[12px] ${
            isLanguageDropdownOpen
              ? "transition-all"
              : "invisible translate-y-[-100%] opacity-0 transition-all"
          }`}
        >
          <button type="button" className="hover:italic hover:text-secondary-2">
            English
          </button>
          <button type="button" className="hover:italic hover:text-secondary-2">
            Tiếng Việt
          </button>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
