import React, { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogInSection from "@/components/Sections/LogInSection";
import TopHeader from "@/components/TopHeader";

function SignUp() {
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
    <main>
      <TopHeader />
      <div className={isScrolled ? "fixed -top-[23px] z-50 w-full" : ""}>
        <Header />
      </div>
      <div className="mt-[5.9375rem]">
        <LogInSection />
        <Footer />
      </div>
    </main>
  );
}

export default SignUp;
