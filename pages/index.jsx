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
        <meta name="description" content="Home Page for Exclusive E-Commerce" />
        <title>FinnWasabi's Intern E-Commerce Project at WiiCamp</title>
        <meta
          name="title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          name="description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wiicamp-intern-24-10-tung.vercel.app/"
        />
        <meta
          property="og:title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          property="og:description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wiicamp-intern-24-10-tung.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          property="twitter:description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
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
