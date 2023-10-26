import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Categories from "@/components/Sections/Categories";
import FlashSales from "@/components/Sections/FlashSales";
import JBLFlashSale from "@/components/Sections/JBLFlashSale";
import ThisMonth from "@/components/Sections/ThisMonth";
import TopSection from "@/components/Sections/TopSection";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <TopSection />
      <FlashSales />
      <Categories />
      <ThisMonth />
      <JBLFlashSale />
      <Footer />
    </main>
  );
}
