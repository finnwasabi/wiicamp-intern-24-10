import React from "react";
import Head from "next/head";
import Image from "next/image";

function Splash() {
  return (
    <>
      <Head>
        <title>Loading...</title>
        <meta name="description" content="Loading..." />
      </Head>
      <div className="splash-container container flex h-screen items-center justify-center">
        <Image
          className="animate-bounce"
          src="/splash-image.png"
          width={150}
          height={150}
          alt="Loading..."
          priority
        />
      </div>
    </>
  );
}

export default Splash;
