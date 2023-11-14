import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

const CartSection = dynamic(() => import("@/components/Sections/CartSection"), {
  ssr: false,
  loading: () => <p className="h-screen" />,
});

function Cart() {
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
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <main>
        <TopHeader />
        <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
          <Header />
        </div>
        <div className="mt-[5.9375rem]">
          <CartSection />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Cart;
