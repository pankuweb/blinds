import React from "react";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import DesignBlinds from "./Components/DesignBlinds";
import ProductAccordion from "./Components/ProductAccordions";
const ProductPage = () => {
  return (
    <div>
      <Header />
      <div className="layout_main_section">
        <DesignBlinds />
        <ProductAccordion />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
