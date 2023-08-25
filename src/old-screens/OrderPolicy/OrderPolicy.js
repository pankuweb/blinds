import React, { useState } from "react";
import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
const OrderPolicy = () => {
  const [activeTab, setActiveTab] = useState("blindscom-guarantees");

  const handleNavClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    const sectionTop = section?.offsetTop - 56;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };
  return (
    <section>
      <Layout>
        <div className="order-policies-section mb-5">
          <BannerCommon
            title=""
            offers="Order Policies"
            btnSave=""
            paragraph="Find detailed information about shipping, guarantees and, warranty, promotions and 
                    order changes and cancellations."
            classbg="faq_by_section"
            className=""
            classh1="fs-1 fw-bolder"
            classh4=""
            classbgimage="w-50 mx-auto text-center text-white fq-75"
            classp="fs-3 p-0"
          />

          <div className="faz-main-section">
            <div className="container">
              <header className="navbar justify-content-center gap-3 position-sticky top-0 z-3 bg-white text-dark ">
                <nav className="sticky-nav">
                  <ul>
                    <li>
                      <a
                        href="#blindscom-guarantees"
                        className={
                          activeTab === "blindscom-guarantees" ? "active" : ""
                        }
                        onClick={() => handleNavClick("blindscom-guarantees")}
                      >
                        blindscom-guarantees
                      </a>
                    </li>
                    <li>
                      <a
                        href="#privacy-and-security"
                        className={
                          activeTab === "privacy-and-security" ? "active" : ""
                        }
                        onClick={() => handleNavClick("privacy-and-security")}
                      >
                        Privacy and Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#payment-and-fees"
                        className={
                          activeTab === "payment-and-fees" ? "active" : ""
                        }
                        onClick={() => handleNavClick("payment-and-fees")}
                      >
                        Payment and Fees
                      </a>
                    </li>
                    <li>
                      <a
                        href="#order-changes-and-refunds"
                        className={
                          activeTab === "order-changes-and-refunds"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          handleNavClick("order-changes-and-refunds")
                        }
                      >
                        Order Changes and Refunds
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>

              <div className="container">
                <div id="blindscom-guarantees">
                  <h5>Blinds.com Guarantees</h5>
                  <p>
                    If you're not 100% satisfied with the style, color or
                    quality of your blind, shade or shutter, we'll work with you
                    to make it right. Simply contact us within 30 calendar days
                    after delivery to your home and we'll walk you through
                    returning your blind. We'll send a replacement of equal
                    value at no additional charge. Read the details of our
                    Satisfaction Guarantee here to ensure your order qualifies.
                  </p>
                </div>
              </div>

              <div id="privacy-and-security">
                <h5>Privacy</h5>
                <p>
                  We respect your privacy, and know that it is important to you
                  how your information is handled. All personal information you
                  provide us WILL remain absolutely confidential and be used
                  solely to communicate better with you. To see the ways that we
                  use the information you provide us, visit our Privacy Policy
                  for further details.
                </p>
              </div>

              <div id="payment-and-fees" className=" pt-1">
                <h5>Order Changes and Refunds</h5>
                <p>
                  Because our products are custom made to your exact
                  specifications, they are not suitable for resale in the
                  ordinary course of business. Therefore, it is important that
                  you are sure of your decisions before you finalize your
                  purchase. We are happy to change or cancel orders as long as
                  you contact us within 24 hours from the date and time the
                  order was submitted to us. Please call our Customer Service
                  department at 800-505-1905 to process any changes or
                  cancellations. Below are some points about how we handle
                  cancellations and changes:
                </p>
              </div>

              <div id="order-changes-and-refunds">
                <h5>Blinds.com Guarantees</h5>
                <p>
                  If you're not 100% satisfied with the style, color or quality
                  of your blind, shade or shutter, we'll work with you to make
                  it right. Simply contact us within 30 calendar days after
                  delivery to your home and we'll walk you through returning
                  your blind. We'll send a replacement of equal value at no
                  additional charge. Read the details of our Satisfaction
                  Guarantee here to ensure your order qualifies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default OrderPolicy;
