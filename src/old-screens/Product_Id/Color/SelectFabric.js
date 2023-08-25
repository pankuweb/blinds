import { useEffect, useState } from "react";
import SelectControl from "./SelectControl";
import banner_Left from "@/assets/images/banner-image.webp";

const SelectFabric = ({ fabricRollDirection, getSelectedFabric }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slctFabric, setSlctFabric] = useState();

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (fabricRollDirection && fabricRollDirection[0]) {
      setActiveIndex(0);
      setSlctFabric(fabricRollDirection[0]?.name);
    }
  }, [fabricRollDirection]);

  useEffect(() => {
    getSelectedFabric(slctFabric);
  }, [slctFabric]);

  return (
    <section>
      <div className="select_fabric_section">
        <h4 className="fw-semibold">Select Fabric Roll Direction</h4>
        <div className="mb-3"></div>
        {fabricRollDirection &&
          fabricRollDirection?.map((item, ind) => {
            return (
              <SelectControl
                key={ind}
                imgTitle={banner_Left}
                title={item?.name}
                className="d-none"
                titlePre={item?.description}
                isActive={activeIndex === ind}
                onClick={() => {
                  handleImageClick(ind), setSlctFabric(item?.name);
                }}
              />
            );
          })}
        {/* <SelectControl
          imgTitle={banner_Left}
          title="Standard Roll"
          className="d-none"
          titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
          isActive={activeIndex === 0}
          onClick={() => handleImageClick(0)}
        />
        <SelectControl
          imgTitle={banner_Left}
          title="Reverse Roll"
          className="d-none"
          titlePre="With a reverse roll, the fabric hangs toward the room,
           away from the glass. Not available with a valance."
          isActive={activeIndex === 1}
          onClick={() => handleImageClick(1)}
        /> */}
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
      </div>
    </section>
  );
};
export default SelectFabric;
