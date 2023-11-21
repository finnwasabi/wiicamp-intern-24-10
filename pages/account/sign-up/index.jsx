import React from "react";
import Head from "next/head";

import SignUpSection from "@/components/Sections/SignUpSection";

import withGuest from "@/stores/withGuest";

function SignUp() {
  return (
    <main>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpSection />
    </main>
  );
}

export default withGuest(SignUp);
