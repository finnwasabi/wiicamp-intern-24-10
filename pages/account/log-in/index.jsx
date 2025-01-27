import React from "react";
import Head from "next/head";

import LogInSection from "@/components/Sections/LogInSection";

import withGuest from "@/stores/withGuest";

function LogIn() {
  return (
    <main>
      <Head>
        <title>Log In</title>
        <meta
          name="description"
          content="Log In Page for Exclusive E-Commerce"
        />
      </Head>
      <LogInSection />
    </main>
  );
}

export default withGuest(LogIn);
