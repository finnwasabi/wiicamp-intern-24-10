import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopSection from "@/components/Sections/TopSection";
import FlashSales from "@/components/Sections/FlashSales";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <TopSection />
      <FlashSales />
      <Footer />
    </main>
  );
}
