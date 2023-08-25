import Layout from "@/src/components/Layout";
import BannerCommon from "@/src/components/BannerCommon";
import Link from "next/link";

const Affiliates = () => {
  return (
    <section>
      <Layout>
        <div className="affiliates-section">
          <BannerCommon
            title=""
            offers="Earn Money with the Blinds.com Affiliate Program!"
            btnSave=""
            paragraph=""
            className=""
            classh1="fs-1 fw-bolder lh-base"
            classh4=""
            classbgimage="text-center text-white p-4 p-md-5 p-lg-0"
            classp=""
          />
          <div className="container">
            <p>
              If you have a Web site and think your visitors would be interested
              in our products,
              <Link href="https://app.impact.com/campaign-promo-signup/Blindscom.brand?execution=e1s1">
                join
              </Link>
              the Blinds.com FREE Affiliate Program and we'll pay you cash for
              referring them to us.
            </p>
            <p>
              Our affiliate program is your opportunity to grow with Blinds.com,
              one of the fastest growing retail sites on the Internet and one of
              the top window coverings retailers in the world. As a member of
              our affiliate program, that could add up to big commissions for
              you.
            </p>
            <p>
              <Link href="https://app.impact.com/campaign-promo-signup/Blindscom.brand?execution=e3s1">
                Join today
              </Link>
              at NO COST and start earning commissions on every sale you refer
              to our site.
            </p>
            <p>
              The Blinds.com Affiliate Program is powered by Impact.com, the
              company that pioneered online affiliate marketing and runs the
              largest, most successful pay-for-performance affiliate marketing
              network on the Internet. They provide the tools and services that
              make it easy for you to track and earn commissions.
            </p>
            <p>
              To join our program, you must
              <Link href="https://app.impact.com/campaign-promo-signup/Blindscom.brand?execution=e9s1">
                register
              </Link>
              at Impact.com and receive a user name and password. This ensures
              that your account information remains private and secure. If you
              are already registered with Impact.com, find our affiliate program
              listed under the "Home & Living" category.
            </p>
            <p>
              It's free, so
              <Link href="https://app.impact.com/campaign-promo-signup/Blindscom.brand?execution=e6s1">
                find out more.
              </Link>
            </p>
            <p>
              The Blinds.com Affiliate Team -
              <Link href="mailto:affiliates@Blinds.com">
                Affiliates@Blinds.com
              </Link>
            </p>
            <p>
              P.S. - You can earn up to 7%, and because our average order size
              is high, your commissions can add up pretty quickly. We provide 30
              return days (i.e. we will pay you for sales you generate up to 30
              days after a customer has linked to our site for the first time).
              <Link href="https://app.impact.com/campaign-promo-signup/Blindscom.brand?execution=e7s1">
                Join now.
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Affiliates;
