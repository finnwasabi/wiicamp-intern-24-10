import React, { useEffect, useState } from "react";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Categories from "@/components/Sections/Categories";
import CustomerServices from "@/components/Sections/CustomerServices";
import FlashSales from "@/components/Sections/FlashSales";
import JBLFlashSale from "@/components/Sections/JBLFlashSale";
import NewArrival from "@/components/Sections/NewArrival";
import OurProducts from "@/components/Sections/OurProducts";
import ThisMonth from "@/components/Sections/ThisMonth";
import TopSection from "@/components/Sections/TopSection";
import TopHeader from "@/components/TopHeader";

export default function Home() {
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
    <main className="overflow-x-hidden">
      <TopHeader />
      <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
        <Header show3icons />
      </div>
      <div className="mt-[5.9375rem]">
        <TopSection />
        <FlashSales />
        <Categories />
        <ThisMonth />
        <JBLFlashSale />
        <OurProducts />
        <NewArrival />
        <CustomerServices />
        <FillUpArrow />
        <Footer />
      </div>
    </main>
  );
}
