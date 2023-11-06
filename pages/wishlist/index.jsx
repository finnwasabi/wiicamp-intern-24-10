import React, { useEffect, useState } from "react";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WishlistSection from "@/components/Sections/WishlistSection";
import TopHeader from "@/components/TopHeader";

function Wishlist() {
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
        <WishlistSection />
        <FillUpArrow />
        <Footer />
      </div>
    </main>
  );
}

export default Wishlist;
