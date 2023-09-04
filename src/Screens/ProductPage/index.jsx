import React, { useEffect, useState } from "react";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import DesignBlinds from "./Components/DesignBlinds";
import ProductAccordion from "./Components/ProductAccordions";
const ProductPage = ({ data }) => {
  const [design, setDesign] = useState(null);
  const [colors, setColors] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [letestPrice, setLetestPrice] = useState();

  const handleManagePrice = (colors, design) => {
    let latestPrice = 0;
    if (colors?.color_price) {
      latestPrice += Number(colors?.color_price);
    }
    if (design) {
      latestPrice += Number(design?.price);
    }
    return latestPrice;
  };

  useEffect(() => {
    setLetestPrice(handleManagePrice(colors, design));
  }, [colors, design]);

  useEffect(() => {
    setProductDetails({
      letestPrice: letestPrice,
      colorDetails: colors,
      sizeDetails: design,
    });
  }, [letestPrice]);

  return (
    <div>
      <Header />
      <div className="layout_main_section">
        <DesignBlinds
          productDetails={productDetails}
          getDetails={setDesign}
          data={data}
        />
        <ProductAccordion
          productDetails={productDetails}
          getDetails={setColors}
          data={data}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
