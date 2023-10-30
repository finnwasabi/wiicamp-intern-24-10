import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignUpSection from "@/components/Sections/SignUpSection";
import TopHeader from "@/components/TopHeader";

function SignUp() {
  return (
    <main>
      <TopHeader />
      <Header />
      <SignUpSection />
      <Footer />
    </main>
  );
}

export default SignUp;
