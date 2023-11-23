import React from "react";
import Head from "next/head";

import MyAccountSection from "@/components/Sections/MyAccountSection";

import withAuth from "@/stores/withAuth";

function MyAccount() {
  return (
    <main>
      <Head>
        <title>My Account</title>
        <meta
          name="description"
          content="My Account Page for Exclusive E-Commerce"
        />
      </Head>
      <MyAccountSection />
    </main>
  );
}

export default withAuth(MyAccount);
