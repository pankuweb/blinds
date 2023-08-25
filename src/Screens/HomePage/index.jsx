import React from "react";
import Header from "../Common/Components/Header";
import Banner from "./Components/Banner";
import CategoryShop from "./Components/CategoryShop";
import SpecialProduct from "./Components/SpecialProduct";
import SummerBanner from "./Components/SummerBanner";
import ShopGearOnline from "./Components/ShopGearOnline";
import BestSallers from "./Components/BestSellers";
import OurLatestNews from "./Components/OurLatestNews";
import Footer from "@/src/components/Footer";
import EmailSubscribe from "../Common/Components/EmailSubscribe";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="layout_main_section">
        <Banner />
        <CategoryShop />
        <SpecialProduct />
        <SummerBanner />
        <ShopGearOnline />
        <BestSallers />
        <OurLatestNews />
        <EmailSubscribe />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
