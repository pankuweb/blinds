import UnoptimizedImage from "@/UnoptimizedImage";
import Link from "next/link";
import ImagesFirst from "@/assets/images/Images-first.webp";
import ImagesSecond from "@/assets/images/Image-second.webp";
import ImagesThrid from "@/assets/images/Images-thrid.webp";

const CommercialAccordion = () => {
  return (
    <section>
      <div className="main_accordion_section commercia-costs-accordion">
        <div className="container">
          <h4 className="fw-semibold mb-5">FAQ</h4>
          <div className="accordion mb-5" id="accordionPanelsStayOpenExample">
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
                  Who is eligible?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Licensed interior designers, home stagers, general
                  contractors, home builders, architects, government entities,
                  hotels & hospitality, and many other registered commercial and
                  business entities. Once your order is placed will be held for
                  24 hours and may be subject to verification of a tax ID or W9
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
                  How to join and receive exclusive Blinds.com Pro & Trade
                  member discounts?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Create a Blinds.com Pro & Trade account or convert your
                  existing account to Pro & Trade. Once signed in, you are
                  eligible for our Pro & Trade only discounts. When shopping
                  Blinds.com, add your custom window treatments to your cart as
                  usual.When ready to checkout, or to check your total, you’ll
                  find your 50% discount ready to apply in your cart. Just
                  remember that you must be logged in to your Pro & Trade
                  account for your discount to display.
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
                  Can I convert my existing Blinds.com account to a Pro & Trade
                  account?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Yes! We make that easy too. Just sign up for a Pro & Trade
                  account and your existing profile will automatically be
                  converted to a Pro & Trade account giving you instant access
                  to member perks like exclusive discounts
                </div>
              </div>
            </div>
          </div>
          <div className="commercial-exempt-Information col-8 mx-auto mb-3">
            <h4 className="fw-semibold mb-5 text-center">
              Tax-Exempt Information
            </h4>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <UnoptimizedImage
                    src={ImagesFirst}
                    alt="svgviewer"
                    className="img-fluid"
                  />
                  <h6 className="fw-semibold">Register</h6>
                  <p>Register your tax-exempt status using our online form</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <UnoptimizedImage
                    src={ImagesSecond}
                    alt="prismic.io"
                    className="img-fluid"
                  />
                  <h6 className="fw-semibold">Confirm</h6>
                  <p>
                    You'll receive an email confirming your tax-exempt status
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <UnoptimizedImage
                    src={ImagesThrid}
                    alt="prismic"
                    className="img-fluid"
                  />
                  <h6 className="fw-semibold">Order</h6>
                  <p>You're ready to go! Shop online or request a quote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="commercial-btn-form text-center text-sm-start">
            <p>
              Where required by law, your purchase will be subject to sales tax,
              however, you can easily apply for tax exemption status by filling
              out this form or contacting a Design Consultant.
            </p>
            <button>Tax-Exempt Form</button>
            <h6 className="fw-semibold">Things to Know</h6>
            <p>
              If your tax-exempt certificate is from Alaska, Louisiana, or New
              Mexico, please call us at 800-921-1668 to register your tax
              exemption with Blinds.com. When completing
              <b>
                your order, you must use the same email address (case sensitive)
                that you entered on the <Link href="#">tax exemption</Link>{" "}
                form.
              </b>
              Your SHIPPING zip code must also match the state you entered.
              Otherwise, your tax will not be removed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialAccordion;
