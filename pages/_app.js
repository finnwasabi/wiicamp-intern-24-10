import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import PropTypes from "prop-types";

import useAuthStore from "@/stores/authStore";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    useAuthStore.getState(); // This will initialize the Zustand store on the server side
  }, []);

  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
