import Layout from "@/src/components/Layout";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import OverlayBg from "./OverlayBg";
import OnlineShoping from "./OnlineShoping";
import Seller from "./Seller";
import LatestNews from "./LatestNews";
import Footer from "@/src/components/Footer";
const index = () => {
  return (
    <section>
      <Layout>
        <div className="layout_main_section">
          <Banner />
          <Category />
          <Products />
          <OverlayBg />
          <OnlineShoping />
          <Seller />
          <LatestNews />
        </div>
      </Layout>
    </section>
  );
};
export default index;
