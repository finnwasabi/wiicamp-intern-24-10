import React, { useEffect, useState } from "react";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/components/Sections/ContactSection";
import TopHeader from "@/components/TopHeader";

import { useAuth } from "@/AuthContext";

function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn } = useAuth();

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
        <title>Contact</title>
      </Head>
      <main>
        <TopHeader />
        <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
          {isLoggedIn && <Header show3icons />}
          {!isLoggedIn && <Header show3icons={false} />}
        </div>
        <div className="mt-[5.9375rem]">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Contact;
