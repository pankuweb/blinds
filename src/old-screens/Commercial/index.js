import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
import CommercialOrder from "./CommercialOrder";
import CommercialChoose from "./CommercialChoose";
import CommercialAccordion from "./CommercialAccordion";
const Commercial = () => {
  return (
    <section>
      <Layout>
        <div className="commercial_bottom_section">
          <BannerCommon
            title="Commercial, Pro & Trade Blinds from the #1 Online Seller"
            offers="SAVE 50%"
            btnSave=" Join Free & Shop Online"
            paragraph="with exclusive perks & our best price for pros"
            classh4=""
            classh1="mb-3"
            classbgimage="text-center text-white"
            classp="mb-5"
            classbg="commercial_by_section"
          />
          <CommercialOrder />
          <CommercialChoose />
          <CommercialAccordion />
        </div>
      </Layout>
    </section>
  );
};
export default Commercial;
