import Layout from "@/src/components/Layout";
import BottomAccordion from "./BottomAccordion";
import Product from "./Product";

const ProductPage = ({ data }) => {
  return (
    <section>
      <Layout>
        <Product data={data} />
        <BottomAccordion data={data} />
      </Layout>
    </section>
  );
};
export default ProductPage;
