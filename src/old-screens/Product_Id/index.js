import Layout from "@/src/components/Layout";
import ProductBanner from "./ProductBanner";

const Product_Id = ({
  data,
  leftControl,
  fabricRollDirection,
  multiShades,
}) => {
  return (
    <section>
      <Layout>
        <ProductBanner
          data={data}
          leftControl={leftControl}
          fabricRollDirection={fabricRollDirection}
          multiShades={multiShades}
        />
      </Layout>
    </section>
  );
};
export default Product_Id;
