import Card from "@/src/old-screens/Card/Card";
import Head from "next/head";
import Cart from "@/src/Screens/Cart";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Card</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Cart />
    </section>
  );
};
export default index;
