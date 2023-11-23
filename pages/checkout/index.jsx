import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const CheckOutSection = dynamic(
  () => import("@/components/Sections/CheckOutSection"),
  {
    ssr: false,
    loading: () => <p className="h-screen" />,
  },
);

function Checkout() {
  return (
    <main>
      <Head>
        <title>Checkout</title>
        <meta
          name="description"
          content="Checkout Page for Exclusive E-Commerce"
        />
      </Head>
      <CheckOutSection />
    </main>
  );
}

export default Checkout;
