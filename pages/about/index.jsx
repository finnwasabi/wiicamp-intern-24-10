import React from "react";
import Head from "next/head";

import FillUpArrow from "@/components/Buttons/FillUpArrow";
import AboutSection from "@/components/Sections/AboutSection";

function About() {
  return (
    <main>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="About Page for Exclusive E-Commerce"
        />
      </Head>
      <AboutSection />
      <FillUpArrow />
    </main>
  );
}

export default About;
