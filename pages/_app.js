import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import PropTypes from "prop-types";

import { CartProvider } from "@/contexts/CartContext";
import useAuthStore from "@/stores/authStore";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    useAuthStore.getState();
  }, []);

  return (
    <CartProvider>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
