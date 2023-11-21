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
      </Head>
      <CheckOutSection />
    </main>
  );
}

export default Checkout;
