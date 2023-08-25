import Layout from "@/src/components/Layout";
import BottomAccordion from "./BottomAccordion";
import Product from "./Product";

const ProductPage = () => {
  return (
    <section>
      <Layout>
        <Product />
        <BottomAccordion />
      </Layout>
    </section>
  );
};
export default ProductPage;
