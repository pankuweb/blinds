import ProductPage from "@/src/old-screens/Product";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Product</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <ProductPage />
    </section>
  );
};
export default index;
