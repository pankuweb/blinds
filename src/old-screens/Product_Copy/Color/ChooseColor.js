import { useState, useEffect } from "react";
import RoundedColor from "./RoundedColor";
import CardCommon from "./CardCommon";

const ChooseColor = ({ color, getChoosedColor }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slctColor, setSlctColor] = useState();
  const [title, setTitle] = useState("");
  const colorData = color?.product ? color?.product?.color : "";
  useEffect(() => {
    if (colorData && colorData[0]?.colors[0]?.name) {
      setActiveIndex(colorData[0]?.colors[0]?.name);
      setSlctColor(colorData[0]?.colors[0]?.name);
      setTitle(colorData[0]?.colors[0]?.name);
    }
  }, [colorData]);

  const handleSelectColor = (clr) => {
    setActiveIndex(clr);
    return setSlctColor(clr);
  };

  useEffect(() => {
    getChoosedColor(slctColor);
  }, [slctColor]);

  return (
    <section>
      <div className="choose_color_section">
        <h4 className="fw-semibold">Select Color</h4>
        {/*  */}
        {colorData &&
          colorData?.map((item, ind) => {
            return (
              <div key={ind}>
                <div className="mb-3"></div>
                <h5 className="fw-semibold">{item?.name}</h5>
                <div className="mb-3"></div>
                <div className="attention-color-section">
                  {ind === 0 && (
                    <div className="d-flex gap-1">
                      <h6 className="text-secondary">COLOR :</h6>
                      <h6>{title}</h6>
                    </div>
                  )}
                  <div className="mb-3"></div>
                  <div className="common-img">
                    {item?.colors &&
                      item?.colors?.map((clr, index) => {
                        return (
                          <RoundedColor
                            key={index}
                            imgColor={clr?.image}
                            imgsrc={clr?.image}
                            isActive={activeIndex === clr?.name}
                            onClick={() => {
                              handleSelectColor(clr?.name);
                              setTitle(clr?.name);
                            }}
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="mb-3"></div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ChooseColor;
