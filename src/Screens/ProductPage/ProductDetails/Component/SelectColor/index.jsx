import { useState, useEffect } from "react";
import RoundColorCard from "./RoundColorCard";
const SelectColor = ({ getSelectedColor }) => {
  const product_colors = [
    {
      id: 1,
      color_cat_title: '3/8" Single Cell',
      colors: [
        {
          id: 1,
          color_code: "#dddfff",
          name: "Red",
          price: 15.25,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 2,
          color_code: "#dddf22",
          name: "Yellow SCC26666",
          price: 10.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 3,
          color_code: "#0d1aca",
          name: "Blue SCC26666",
          price: 14.25,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 4,
          color_code: "#858dfc",
          name: "Light Blue SCC26666",
          price: 12.1,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 6,
          color_code: "#d66a17",
          name: "Dark Orange SCC26666",
          price: 25.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 7,
          color_code: "#5cdb35",
          name: "Parrot Green SCC26666",
          price: 13.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 8,
          color_code: "#e50c30",
          name: "Red SCC26666",
          price: 16.45,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 9,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 10,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 11,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 12,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 13,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 14,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 15,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
      ],
    },
    {
      id: 2,
      color_cat_title: '3/4" Single Cell',
      colors: [
        {
          id: 16,
          color_code: "#dddfff",
          name: "Green",
          price: 15.25,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 17,
          color_code: "#dddf22",
          name: "Yellow SCC26666",
          price: 10.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 18,
          color_code: "#0d1aca",
          name: "Blue SCC26666",
          price: 14.25,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 19,
          color_code: "#858dfc",
          name: "Light Blue SCC26666",
          price: 12.1,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 20,
          color_code: "#d66a17",
          name: "Dark Orange SCC26666",
          price: 25.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 21,
          color_code: "#5cdb35",
          name: "Parrot Green SCC26666",
          price: 13.15,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 22,
          color_code: "#e50c30",
          name: "Red SCC26666",
          price: 16.45,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
        {
          id: 23,
          color_code: "#0cade8",
          name: "Sky Blue SCC26666",
          price: 24.27,
          image:
            "https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both",
        },
      ],
    },
  ];

  const initialActiveIndice =
    product_colors && product_colors?.[0]?.colors[0]?.id;
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
      <div className="choose_color_section">
        <h4 className="fw-semibold">Select Color</h4>
        {product_colors &&
          product_colors?.map((item, index) => {
            return (
              <div key={index}>
                <div className="mb-3"></div>
                <h5 className="fw-semibold">{item?.color_cat_title}</h5>
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
                                color_category_name: item?.color_cat_title,
                                color_name: clr?.name,
                                color_price: clr?.price,
                                color_code: clr?.color_code,
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
