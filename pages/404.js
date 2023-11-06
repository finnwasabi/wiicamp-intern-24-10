import React, { useEffect, useState } from "react";
import Link from "next/link";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

function Checkout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <TopHeader />
      <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
        <Header show3icons />
      </div>
      <div className="mt-[5.9375rem]">
        <div className="container">
          <div className="flex gap-3 pt-20">
            <Link href="/" className="text-text-1">
              Home
            </Link>
            <div className="text-text-1">/</div>
            <div className="cursor-default">404 Error</div>
          </div>
          <div className="text-[6.875rem] font-semibold text-center mt-[8.75rem] mb-10 tracking-wide">
            404 Not Found
          </div>
          <div className="text-center mb-20">
            Your visited page not found. You may go home page.
          </div>
          <div className="w-fit ml-auto mr-auto mb-[8.75rem]">
            <Link href="/">
              <PrimaryButton label="Back to home page" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Checkout;
