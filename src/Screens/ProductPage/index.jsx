import React from "react";
import Header from "../Common/Components/Header";
import DesignBlinds from "./Components/DesignBlinds";
import ProductAccordion from "./Components/ProductAccordions";
const ProductPage = () => {
  return (
    <div>
      <Header />
      <DesignBlinds />
      <ProductAccordion />
    </div>
  );
};

export default ProductPage;
