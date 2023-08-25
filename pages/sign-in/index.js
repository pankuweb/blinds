import Login from "@/src/old-screens/Login/Login";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Sign In</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Login />
    </section>
  );
};

export default index;
