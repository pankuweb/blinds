import Product_Id from "@/src/old-screens/Product_Id";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Product Id</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Product_Id />
    </section>
  );
};
export default index;
