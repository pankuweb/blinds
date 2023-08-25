import BannerCommon from "@/src/components/BannerCommon";

const { default: Layout } = require("@/src/components/Layout");

const Privacy = () => {
  return (
    <section>
      <Layout>
        <div className="privacy-policy-section">
          <BannerCommon
            title=""
            offers="Blinds.com Privacy Policy"
            btnSave=""
            paragraph=""
            classbg="privacy-policy_by_section"
            className=""
            classh1="fs-1 fw-bolder"
            classh4=""
            classbgimage="w-50 mx-auto text-center text-white"
            classp="fs-3 p-0"
          />
          <div className="container">
            <div className="mb-5">
              <div>
                <h2 className="fw-semibold mb-3">Blinds.com Privacy Policy</h2>
                <p>
                  At Blinds.com, we value and respect the privacy of our
                  customers and visitors. In the course of operating our
                  business and interacting with you, we collect, use, and
                  disclose personal information. We do so to process and fulfill
                  your orders, improve our digital offerings, create consistent
                  experiences for you, protect the rights and information of our
                  customers and our company, and for the other purposes
                  disclosed in this Privacy Policy.
                </p>
                <p>
                  The Privacy Policy will provide you with information about how
                  we collect, use, and disclose personal information, and
                  describe the choices and rights you may have regarding your
                  personal information. If you have any questions, please do not
                  hesitate to contact us via the channels listed below.
                </p>
              </div>
              <div>
                <h4 className="fw-semibold">About This Policy</h4>
                <p>
                  This Privacy Policy describes the privacy practices of
                  Blinds.com. It applies to the information we collect in
                  association with your interactions with us, including, but not
                  limited to:
                </p>
                <ul>
                  <li>Use of our websites, including mobile websites</li>
                  <li>Phone and email communications with us</li>
                  <li>
                    Social media interactions on our websites and other
                    third-party websites like Facebook, YouTube, Pinterest,
                    Instagram, and Twitter
                  </li>
                  <li>Our online advertisements or emails</li>
                  <li>Interactions with our authorized service providers</li>
                </ul>
                <p>
                  It also applies to personal information that we receive from
                  business partners and other third parties. You can find out
                  more information about our collection of personal information
                  below.
                </p>
                <p>
                  For information about our processing of personal information
                  regarding current associates, former associates, and
                  candidates, please see our Associate Privacy Statement.
                </p>
                <p>
                  This Privacy Policy does not apply to third-party websites
                  accessible through our websites. Our parent company, The Home
                  Depot, and its subsidiaries and Affiliates operate subject to
                  their own privacy statements, which are available on their
                  respective websites. For purposes of this Privacy Policy, an
                  Affiliate is a company that is controlled by or under common
                  control with The Home Depot, our parent company.
                </p>
              </div>
              <div>
                <h4 className="fw-semibold">What Do We Collect?</h4>
                <p>
                  As noted above, we collect personal information when you
                  contact us, when you interact with or use our digital
                  offerings, and from business partners and other third parties.
                </p>
                <p>
                  The table below describes the categories of personal
                  information we collect, the sources we collect the information
                  from, our purposes for collecting the information and the
                  types of recipients that may receive the information from us.
                  And you can find more details in the "What Do We Collect?"
                  "How Do We Collect Information?," and "Information Sharing"
                  sections that follow.
                </p>
                <h6>
                  Identifiers, such as name, email address, phone number,
                  username, physical address, online identifier, device
                  identifier, IP address, and social media handle Where do we
                  collect it from?
                </h6>
                <ul>
                  <li>
                    Directly from you or the devices you use to access digital
                    services, such as websites and applications.
                  </li>
                  <li>
                    Companies that provide services on our behalf (e.g.,
                    installers).
                  </li>
                  <li>
                    Security and fraud prevention services that help us confirm
                    that transactions are valid and otherwise help us protect
                    our assets and you.
                  </li>
                  <li>
                    Marketing companies that help us learn about our customers
                    and the devices they use to access digital content.
                  </li>
                  <li>
                    Companies that supplement our customer records with
                    additional information.
                  </li>
                  <li>Shipping providers that update address information</li>
                  <li>Social media platforms.</li>
                  <li>
                    Advertising companies and content publishers that present
                    you with our ads.
                  </li>
                  <li>Payment and transaction processors.</li>
                  <li>Communications and mailing vendors.</li>
                  <li>
                    Other customers that may provide us with your information to
                    recommend a product or service or, ship products to you, or
                    list you as a recipient of products or services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Privacy;
