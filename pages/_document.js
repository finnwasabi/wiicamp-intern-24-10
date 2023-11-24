import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          name="description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wiicamp-intern-24-10-tung.vercel.app/"
        />
        <meta
          property="og:title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          property="og:description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />
        <meta property="og:image" content="/FinnWasabi.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wiicamp-intern-24-10-tung.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="FinnWasabi's Intern E-Commerce Project at WiiCamp"
        />
        <meta
          property="twitter:description"
          content="Le Nhat Tung aka Finn Wasabi's Intern Project at WiiCamp"
        />
        <meta
          property="twitter:image"
          content="https://wiicamp-intern-24-10-tung.vercel.app/FinnWasabi.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
