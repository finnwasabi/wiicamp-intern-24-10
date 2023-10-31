import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartSection from "@/components/Sections/CartSection";
import TopHeader from "@/components/TopHeader";

function Cart() {
  return (
    <main>
      <TopHeader />
      <Header show3icons />
      <CartSection />
      <Footer />
    </main>
  );
}

export default Cart;
