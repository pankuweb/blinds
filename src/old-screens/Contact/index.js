import BannerCommon from "@/src/components/BannerCommon";
import Link from "next/link";
import email from "@/assets/images/icon-email.svg";
import cec from "@/assets/images/icon-cec.svg";
import live from "@/assets/images/icon-live-chat.svg";
import Layout from "@/src/components/Layout";

const Contact = () => {
  return (
    <section>
      <Layout>
        <div className="contact-section">
          <BannerCommon
            title=""
            offers="We're here for all your questions"
            btnSave=""
            paragraph="Contact us 7 days a week with any questions or concerns"
            classbg="contact_by_section"
            className=""
            classh1="fs-1 fw-bolder lh-sm"
            classh4=""
            classbgimage="text-center text-white p-4 p-md-5 p-lg-0"
            classp="fs-3 p-0"
          />
          <div className="main_accordion_section contact-accordion-section">
            <div className="container">
              <h3 className="fw-semibold mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      How do I track my order?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      Use our
                      <Link href="/track-order">Order Tracking page!</Link> You
                      can also call customer service to learn more about the
                      status of your order. Be sure to have your order number on
                      hand! Once your order has shipped we'll send you the
                      tracking information.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      How do I measure my windows?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      It's easy! View our measuring instructions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Do you sell commercially?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      Yes we do! As the industry leader in online blinds sales,
                      we offer the best prices and products, plus unmatched
                      customer service. Learn more on our commercial page.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5"></div>
              <Link href="">
                See all FAQ's{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 10 19"
                  fill="none"
                  className="ms-1"
                >
                  <g clipPath="url(#clip0_651_577)">
                    <path
                      d="M6.00045 10.2365L1.86458 14.3185C1.78067 14.4024 1.68177 14.4443 1.56788 14.4443C1.45399 14.4443 1.35509 14.4024 1.27118 14.3185L1.01943 14.0667C0.935513 13.9828 0.893555 13.8839 0.893555 13.77C0.893555 13.6561 0.935513 13.5572 1.01943 13.4733L4.61583 9.93085L1.01943 6.40637C0.935513 6.32246 0.893555 6.22356 0.893555 6.10967C0.893555 5.99578 0.935513 5.89688 1.01943 5.81297L1.27118 5.56122C1.35509 5.4773 1.45399 5.43535 1.56788 5.43535C1.68177 5.43535 1.78067 5.4773 1.86458 5.56122L6.00045 9.64314C6.08436 9.72705 6.12632 9.82595 6.12632 9.93984C6.12632 10.0537 6.08436 10.1526 6.00045 10.2365Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </Link>
              <div className="mb-5"></div>
              <div className="mx-2 mx-md-3 mx-lg-0 mx-xl-0 mx-xxl-5">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="live-image-section shadow p-2 p-md-3 p-lg-0 p-xl-3 p-xxl-5  h-100 text-center">
                      <img src={live.src} alt="icon-live" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="shadow p-2 p-md-3 p-lg-0 p-xl-3 p-xxl-5  h-100 text-center">
                      <img src={cec.src} alt="icon-cec" />
                      <div className="p-4 p-md-4 p-lg-5">
                        <p className="mb-5">
                          Mon - Fri 8am to 11pm EDT Sat - Sun 10am to 7pm EDT
                        </p>
                        <a href="tel:800-505-1905" className="tel-800">
                          800-505-1905
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 mx-auto col-lg-4 mt-3 mt-lg-0">
                    <div className="shadow p-2 p-md-3 p-lg-0 p-xl-3 p-xxl-5  h-100 text-center">
                      <img src={email.src} alt="icon-email" />
                      <div className="p-2 p-md-3 p-lg-5">
                        <p>
                          Due to current limitations, we are no longer able to
                          accept or reply to inquiries submitted via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Contact;
