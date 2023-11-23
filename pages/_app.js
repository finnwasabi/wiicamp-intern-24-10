/* eslint-disable react/no-invalid-html-attribute */
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Splash from "@/components/splash";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

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

  if (loading) {
    return <Splash />;
  }

  return (
    <CartProvider>
      <NextNProgress color="#DB4444" height={2} />
      <Head>
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
        <meta property="og:image" content="/public/FinnWasabi.jpg" />

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
        <meta property="twitter:image" content="/public/FinnWasabi.jpg" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <meta name="apple-mobile-web-app-status-bar" content="#DB4444" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
      </Head>
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
