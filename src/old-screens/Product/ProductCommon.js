import ColorCell from "./ColorCell";
import DubbleBottomCell from "./DubbleBottomCell";
import DubbleCell from "./DubbleCell";
import SheerCell from "./SheerCell";
import SingleCell from "./SingleCell";
import WovanCell from "./WovanCell";

const ProductCommon = () => {
  return (
    <section>
      <ColorCell />
      <SingleCell />
      <WovanCell />
      <DubbleCell />
      <DubbleBottomCell />
      <SheerCell />
    </section>
  );
};
export default ProductCommon;
