import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/Sections/AboutSection";
import TopHeader from "@/components/TopHeader";

function about() {
  return (
    <main>
      <TopHeader />
      <Header show3icons />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default about;
