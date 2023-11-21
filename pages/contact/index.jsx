import React from "react";
import Head from "next/head";

import ContactSection from "@/components/Sections/ContactSection";

function Contact() {
  return (
    <main>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactSection />
    </main>
  );
}

export default Contact;
