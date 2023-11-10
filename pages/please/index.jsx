import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";

function Please() {
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
        <title>Not Logged In</title>
      </Head>
      <main>
        <TopHeader />
        <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
          <Header />
        </div>
        <div className="mt-[5.9375rem]">
          <div className="container">
            <div className="flex gap-3 pt-20">
              <Link href="/" className="text-text-1">
                Home
              </Link>
              <div className="text-text-1">/</div>
              <div className="cursor-default">No User</div>
            </div>
            <div className="mb-10 mt-[8.75rem] text-center text-[6.875rem] font-semibold tracking-wide">
              Please Sign up or Log in first
            </div>
            <div className="mb-20 text-center">
              Your visited page not found. You may{" "}
              <Link
                href="/account/sign-up"
                className="font-semibold underline hover:italic"
              >
                Sign up
              </Link>{" "}
              or{" "}
              <Link
                href="/account/log-in"
                className="font-semibold underline hover:italic"
              >
                Log in
              </Link>{" "}
              first.
            </div>
            <div className="mb-[8.75rem] ml-auto mr-auto w-fit">
              <Link href="/account/sign-up">
                <PrimaryButton label="Sign Up or Log In" />
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Please;
