import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import withAuth from "@/stores/withAuth";

const CartSection = dynamic(() => import("@/components/Sections/CartSection"), {
  ssr: false,
  loading: () => <p className="h-screen" />,
});

function Cart() {
  return (
    <main>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Cart Page for Exclusive E-Commerce" />
      </Head>
      <CartSection />
    </main>
  );
}

export default withAuth(Cart);
