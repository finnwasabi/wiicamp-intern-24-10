import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WishlistSection from "@/components/Sections/WishlistSection";
import TopHeader from "@/components/TopHeader";

function wishlist() {
  return (
    <main>
      <TopHeader />
      <Header show3icons />
      <WishlistSection />
      <Footer />
    </main>
  );
}

export default wishlist;
