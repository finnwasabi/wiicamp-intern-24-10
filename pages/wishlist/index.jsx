/* eslint-disable no-console */
import React from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import PropTypes from "prop-types";

import FillUpArrow from "@/components/Buttons/FillUpArrow";

import withAuth from "@/stores/withAuth";

const WishlistSection = dynamic(
  () => import("@/components/Sections/WishlistSection"),
  {
    ssr: false,
    loading: () => {
      return (
        <div className="container flex items-center justify-center">
          <CircularProgress color="black" size={25} />
        </div>
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
  return (
    <main>
      <Head>
        <title>Wishlist</title>
      </Head>
      <WishlistSection products={products} />
      <FillUpArrow />
    </main>
  );
}

Wishlist.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withAuth(Wishlist);
