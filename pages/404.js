import React from "react";
import Head from "next/head";
import Link from "next/link";

import PrimaryButton from "@/components/Buttons/PrimaryButton";

function Checkout() {
  return (
    <main>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 Page for Exclusive E-Commerce" />
      </Head>
      <div className="container mt-[5.9375rem]">
        <div className="flex gap-3 pt-20">
          <Link href="/" className="text-text-1">
            Home
          </Link>
          <div className="text-text-1">/</div>
          <div className="cursor-default">404 Error</div>
        </div>
        <div className="mb-10 mt-[8.75rem] text-center text-[6.875rem] font-semibold tracking-wide">
          404 Not Found
        </div>
        <div className="mb-20 text-center">
          Your visited page not found. You may go home page.
        </div>
        <div className="mb-[8.75rem] ml-auto mr-auto w-fit">
          <Link href="/">
            <PrimaryButton label="Back to home page" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
