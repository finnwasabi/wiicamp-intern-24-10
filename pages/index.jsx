import React from "react";

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
  return (
    <main>
      <TopHeader />
      <Header show3icons />
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
    </main>
  );
}
