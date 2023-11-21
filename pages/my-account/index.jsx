import React from "react";
import Head from "next/head";

import MyAccountSection from "@/components/Sections/MyAccountSection";

import withAuth from "@/stores/withAuth";

function MyAccount() {
  return (
    <main>
      <Head>
        <title>My Account</title>
      </Head>
      <MyAccountSection />
    </main>
  );
}

export default withAuth(MyAccount);
