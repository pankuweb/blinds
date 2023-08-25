import Product_Id from "@/src/old-screens/Product_Id";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  productData,
  leftControl,
  fabricRollDirection,
  multiShades,
} from "./dataObject";
const index = () => {
  const { query } = useRouter();

  return (
    <section>
      <Head>
        <title>Blinds | Product Slug</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Product_Id
        data={productData}
        leftControl={leftControl}
        fabricRollDirection={fabricRollDirection}
        multiShades={multiShades}
      />
    </section>
  );
};
export default index;
