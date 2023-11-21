import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

import { CartProvider } from "@/contexts/CartContext";
import useAuthStore from "@/stores/authStore";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const { login, setInitApp } = useAuthStore();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login();
    }

    setInitApp();
  }, [login, setInitApp]);

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
    <CartProvider>
      <NextNProgress color="#DB4444" height={2} />
      <div className={clsx(poppins.className, "flex min-h-screen flex-col")}>
        <TopHeader />
        <Header isScrolled={isScrolled} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
