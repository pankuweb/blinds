import Signup from "@/src/old-screens/Signup/Signup";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Create an Account</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Signup />
    </section>
  );
};

export default index;
