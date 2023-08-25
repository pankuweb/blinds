import ForgotPassword from "@/src/old-screens/ForgotPassword/ForgotPassword";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Forgot Password</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <ForgotPassword />
    </section>
  );
};

export default index;
