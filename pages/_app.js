import React from "react";
import { Poppins } from "next/font/google";
import PropTypes from "prop-types";

import { AuthProvider } from "../AuthContext";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
