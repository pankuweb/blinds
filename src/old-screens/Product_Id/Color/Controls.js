import { useState, useEffect } from "react";
import SelectControl from "./SelectControl";
import banner_Left from "@/assets/images/banner-image.webp";

const Controls = ({ leftControl, getSelectedControlls }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slctControl, setSlctControl] = useState();
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (leftControl && leftControl[0]) {
      setActiveIndex(0);
      setSlctControl(leftControl[0]);
    }
  }, [leftControl]);
  useEffect(() => {
    getSelectedControlls(slctControl);
  }, [slctControl]);

  return (
    <section>
      <div className="select_lift_control">
        <h4 className="fw-semibold">Select Lift Control</h4>
        <div className="mb-3"></div>
        {leftControl &&
          leftControl?.map((item, ind) => {
            return (
              <SelectControl
                key={ind}
                imgTitle={banner_Left}
                title={item?.name}
                AddsPrice={`Adds $${item?.price}`}
                linePrice={`$${item?.offPrice}`}
                titlePre={item?.description}
                isActive={activeIndex === ind}
                onClick={() => {
                  handleImageClick(ind), setSlctControl(item);
                }}
              />
            );
          })}

        {/* <SelectControl
          imgTitle={banner_Left}
          title="Cordless"
          AddsPrice="Adds $10.36"
          linePrice="$58.28"
          titlePre="Motorized shades allow you to adjust the height of
            your shades, controlling the light, with a simple touch
            of a button, without getting up. Ultimate in
            convenience for hard to reach shades."
          isActive={activeIndex === 1}
          onClick={() => handleImageClick(1)}
        />
        <SelectControl
          imgTitle={banner_Left}
          title="Geared Clutch"
          AddsPrice="Adds $10.36"
          linePrice="$58.28"
          titlePre="Cordless shades are a sleek choice, since there are no
            free hanging cords. Shade is raised by gently tugging
            once, then tugging again to stop the shade at the
            desired position. Safer choice for homes with small
            children and pets."
          isActive={activeIndex === 2}
          onClick={() => handleImageClick(2)}
        />
        <SelectControl
          imgTitle={banner_Left}
          title="Pull Motor"
          AddsPrice="Adds $10.36"
          linePrice="$58.28"
          titlePre="A pull motor lift system uses a beaded chain to lift and
           lower the the shade with a simple tug."
          isActive={activeIndex === 3}
          onClick={() => handleImageClick(3)}
        />
        <SelectControl
          imgTitle={banner_Left}
          title="Reverse Roll"
          AddsPrice="Adds $10.36"
          linePrice="$58.28"
          titlePre="With a reverse roll, the fabric hangs toward the room,
            away from the glass. Not available with a valance."
          isActive={activeIndex === 4}
          onClick={() => handleImageClick(4)}
        /> */}
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
      </div>
    </section>
  );
};
export default Controls;
