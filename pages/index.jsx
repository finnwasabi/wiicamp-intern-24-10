import React from "react";
import axios from "axios";
import Head from "next/head";
import PropTypes from "prop-types";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import Categories from "@/components/Sections/Categories";
import CustomerServices from "@/components/Sections/CustomerServices";
import FlashSales from "@/components/Sections/FlashSales";
import JBLFlashSale from "@/components/Sections/JBLFlashSale";
import NewArrival from "@/components/Sections/NewArrival";
import OurProducts from "@/components/Sections/OurProducts";
import ThisMonth from "@/components/Sections/ThisMonth";
import TopSection from "@/components/Sections/TopSection";

export async function getServerSideProps() {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return {
      props: { products: data },
    };
  } catch (error) {
    return {
      props: { products: [] },
    };
  }
}

export default function Home({ products }) {
  return (
    <main className="mt-[5.9375rem] overflow-x-hidden ">
      <Head>
        <title>Home</title>
      </Head>
      <TopSection />
      <FlashSales products={products} />
      <Categories />
      <ThisMonth products={products} />
      <JBLFlashSale />
      <OurProducts products={products} />
      <NewArrival />
      <CustomerServices />
      <FillUpArrow />
    </main>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
