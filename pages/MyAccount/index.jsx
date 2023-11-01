import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAccountSection from "@/components/Sections/MyAccountSection";
import TopHeader from "@/components/TopHeader";

function MyAccount() {
  return (
    <main>
      <TopHeader />
      <Header show3icons />
      <MyAccountSection />
      <Footer />
    </main>
  );
}

export default MyAccount;
