/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import PropTypes from "prop-types";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

import withAuth from "@/stores/withAuth";

const WishlistSection = dynamic(
  () => import("@/components/Sections/WishlistSection"),
  {
    ssr: false,
    loading: () => {
      return (
        <p className="container flex h-screen items-center justify-center">
          Loading...
        </p>
      );
    },
  },
);

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
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

function Wishlist({ products }) {
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
        <title>Wishlist</title>
      </Head>
      <main>
        <TopHeader />
        <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
          <Header />
        </div>
        <div className="mt-[5.9375rem]">
          <WishlistSection products={products} />
          <FillUpArrow />
          <Footer />
        </div>
      </main>
    </>
  );
}

Wishlist.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withAuth(Wishlist);
