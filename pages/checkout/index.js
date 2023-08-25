import Checkout from "@/src/old-screens/Checkout/Checkout";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Checkout</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Checkout />
    </section>
  );
};

export default index;
