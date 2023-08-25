import Product_Copy from "@/src/old-screens/Product_Copy";
import CustomProduct from "@/src/old-screens/CustomProduct";
import Head from "next/head";
import { productData, leftControl } from "./content";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Product </title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Product_Copy data={productData} leftControl={leftControl} />
    </section>
  );
};
export default index;
