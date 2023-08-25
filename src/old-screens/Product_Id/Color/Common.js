import ProductSize from "@/src/old-screens/Product_Id/Color/ProductSize";
import ChooseColor from "./ChooseColor";
import Controls from "./Controls";
import SelectFabric from "./SelectFabric";
import MultipleShades from "./MultipleShades";
import SelectBottom from "./SelectBottom";

const Common = ({ data, leftControl, fabricRollDirection, multiShades }) => {
  const getColor = (clr) => {
    console.log(clr, "clr===>");
  };
  const getControlls = (control) => {
    console.log(control, "control===>");
  };
  const getFabrics = (fabric) => {
    console.log(fabric, "control===>");
  };
  return (
    <section>
      <ProductSize product={data} />
      <ChooseColor color={data} getChoosedColor={getColor} />
      <Controls leftControl={leftControl} getSelectedControlls={getControlls} />
      <SelectFabric
        fabricRollDirection={fabricRollDirection}
        getSelectedFabric={getFabrics}
      />
      <MultipleShades multiShades={multiShades} />
      <SelectBottom />
    </section>
  );
};

export default Common;
