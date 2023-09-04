import ProductPage from "@/src/Screens/ProductPage";
import Head from "next/head";
import { WEB_API_URL } from "@/utils/config";

const Product = ({ data }) => {
  return (
    <section>
      <Head>
        <title>Blinds | Product</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <ProductPage data={data} />
    </section>
  );
};
export default Product;

export async function getServerSideProps({ query }) {
  const slug = query?.slug;

  try {
    const response = await fetch(`${WEB_API_URL}/api/v1/productus/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product for slug: ${slug}`);
    }
    const data = await response.json();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
