import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CheckOutSection from "@/components/Sections/CheckOutSection";
import TopHeader from "@/components/TopHeader";

function checkout() {
  return (
    <main>
      <TopHeader />
      <Header show3icons />
      <CheckOutSection />
      <Footer />
    </main>
  );
}

export default checkout;
