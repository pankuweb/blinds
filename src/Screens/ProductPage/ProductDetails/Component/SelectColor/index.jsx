import { useState, useEffect } from "react";
import RoundColorCard from "./RoundColorCard";
const SelectColor = ({ productData, getSelectedColor }) => {
  const blindDetails = productData && productData?.product;
  const initialActiveIndice =
    blindDetails?.color && blindDetails?.color?.[0]?.colors[0]?.id;
  const [activeIndice, setActiveIndice] = useState(initialActiveIndice);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectedColorName, setSelectedColorName] = useState("");
  const handleImageClick = (colorIndex, colorObj) => {
    setActiveIndice(colorIndex);
    if (isFirstTime) {
      getSelectedColor(colorObj);
      setSelectedColorName(colorObj?.color_name);
      setIsFirstTime(false);
    } else {
      getSelectedColor(colorObj);
      setSelectedColorName(colorObj?.color_name);
    }
  };

  useEffect(() => {
    const firstProductCategory = blindDetails?.color?.[0]?.name;
    const firstColorObj = blindDetails?.color?.[0]?.colors[0];
    handleImageClick(initialActiveIndice, {
      color_category_name: firstProductCategory,
      color_name: firstColorObj?.name,
      color_price: firstColorObj?.price,
      color_code: firstColorObj?.color_code,
    });
  }, []);

  return (
    <section>
      <div className="choose_color_section">
        <h4 className="fw-semibold">Select Color</h4>
        {blindDetails?.color &&
          blindDetails?.color?.map((item, index) => {
            return (
              <div key={index}>
                <div className="mb-3"></div>
                <h5 className="fw-semibold">{item?.name}</h5>
                <div className="mb-3"></div>
                <div className="attention-color-section">
                  {index === 0 && (
                    <div className="d-flex gap-1">
                      <h6 className="text-secondary">COLOR :</h6>
                      <h6>{selectedColorName}</h6>
                    </div>
                  )}
                  <div className="mb-3"></div>
                  <div className="common-img">
                    {item?.colors &&
                      item?.colors?.map((clr, index) => {
                        return (
                          <RoundColorCard
                            key={index}
                            colorImg={clr?.image}
                            imgSrc={clr?.image}
                            isActive={activeIndice === clr?.id ? true : false}
                            onClick={() =>
                              handleImageClick(clr?.id, {
                                color_category_name: item?.name,
                                color_name: clr?.name,
                                color_price: clr?.price,
                                color_code: clr?.colorCode,
                              })
                            }
                          />
                        );
                      })}
                  </div>
                  <div className="mb-3"></div>
                </div>
                <div className="mb-3"></div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SelectColor;
