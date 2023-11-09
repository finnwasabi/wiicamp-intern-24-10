/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

import request from "./request";

export async function getServerSideProps() {
  try {
    const response = await request.get("products");
    const products = response.data;
    return {
      props: { products },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { products: [] },
    };
  }
}

export default function Home({ products }) {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(products);

  useEffect(() => {
    console.log(products);
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

  if (!products || products?.length === 0) {
    return null;
  }

  return (
    <main className="overflow-x-hidden">
      <TopHeader />
      <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
        <Header show3icons />
      </div>
      <div className="mt-[5.9375rem]">
        <TopSection />
        <FlashSales products={products} />
        <Categories />
        <ThisMonth products={products} />
        <JBLFlashSale />
        <OurProducts products={products} />
        <NewArrival />
        <CustomerServices />
        <FillUpArrow />
        <Footer />
      </div>
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the shape of the array elements here
    }),
  ).isRequired,
};
