import ColorCard from "../ColorCard";
import { useEffect, useState } from "react";
import { product_colors } from "../../content";

const ColorCell = ({ getSelectedColor }) => {
  const initialActiveIndice =
    product_colors && product_colors?.[0]?.colors[0]?.id;
  const [activeIndice, setActiveIndice] = useState(initialActiveIndice);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const handleImageClick = (colorIndex, colorObj) => {
    setActiveIndice(colorIndex);
    if (isFirstTime) {
      getSelectedColor(colorObj);
      setIsFirstTime(false);
    } else {
      getSelectedColor(colorObj);
    }
  };

  useEffect(() => {
    const firstProductCategory = product_colors?.[0]?.color_cat_title;
    const firstColorObj = product_colors?.[0]?.colors[0];
    handleImageClick(initialActiveIndice, {
      color_category_name: firstProductCategory,
      color_name: firstColorObj?.name,
      color_price: firstColorObj?.price,
      color_code: firstColorObj?.color_code,
    });
  }, []);

  return (
    <section>
      <div className="available_right_section">
        <h3 className="fw-semibold mb-3">Color</h3>
        {product_colors &&
          product_colors.map((item, categoryIndex) => {
            return (
              <div className="color-box" key={categoryIndex}>
                <h5 className="fw-normal mb-3 mt-3">{item?.color_cat_title}</h5>
                <div className="available_grid-column">
                  {item?.colors &&
                    item?.colors.map((clr) => {
                      return (
                        <ColorCard
                          key={clr?.id}
                          onClick={() =>
                            handleImageClick(clr?.id, {
                              color_category_name: item?.color_cat_title,
                              color_name: clr?.name,
                              color_price: clr?.price,
                              color_code: clr?.color_code,
                            })
                          }
                          color={clr}
                          isActive={clr?.id === activeIndice ? `active` : ""}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default ColorCell;
