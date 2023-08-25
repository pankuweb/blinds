import ProductSize from "@/src/old-screens/Product_Id/Color/ProductSize";
import ChooseColor from "./ChooseColor";
import Controls from "./Controls";
import SelectBottom from "./SelectBottom";

const Common = ({ data, leftControl }) => {
  const getProductSize = (size) => {
    // console.log(size, "size===>");
  };
  const getColor = (clr) => {
    // console.log(clr, "clr===>");
  };
  const getControlls = (control) => {
    console.log(control, "control===>");
  };

  return (
    <section>
      <ProductSize product={data} getProductSize={getProductSize} />
      <ChooseColor color={data} getChoosedColor={getColor} />
      <Controls
        product={data}
        leftControl={leftControl}
        getSelectedControlls={getControlls}
      />
      <SelectBottom />
    </section>
  );
};

export default Common;
