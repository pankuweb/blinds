import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
import React, { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("using-blindscom");

  const handleNavClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    const sectionTop = section?.offsetTop - 50;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  return (
    <div className="position-relative">
      <Layout>
        <BannerCommon
          title=""
          offers="Frequently Asked Questions"
          btnSave=""
          paragraph="Find information about shopping for window treatments,
                    along with instructions about hoto use our site."
          classbg="faq_by_section"
          className=""
          classh1="fs-1 fw-bolder lh-sm"
          classh4=""
          classbgimage="w-50 mx-auto text-center text-white fq-75"
          classp="fs-3 p-0 lh-sm"
        />
        <div className="faz-main-section">
          <div className="container">
            <header className="navbar justify-content-center gap-3 position-sticky top-0 z-3 bg-white text-dark ">
              <nav className="sticky-nav">
                <ul>
                  <li>
                    <a
                      href="#using-blindscom"
                      className={
                        activeTab === "using-blindscom" ? "active" : ""
                      }
                      onClick={() => handleNavClick("using-blindscom")}
                    >
                      Using Blinds.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sf-and-i-shutters-program"
                      className={
                        activeTab === "sf-and-i-shutters-program"
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        handleNavClick("sf-and-i-shutters-program")
                      }
                    >
                      SF&I Shutters Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ordering-blinds-and-shades"
                      className={
                        activeTab === "ordering-blinds-and-shades"
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        handleNavClick("ordering-blinds-and-shades")
                      }
                    >
                      Ordering Blinds and Shades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#after-your-order"
                      className={
                        activeTab === "after-your-order" ? "active" : ""
                      }
                      onClick={() => handleNavClick("after-your-order")}
                    >
                      After Your Order
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <p>
              Welcome to our Frequently Asked Questions page! Here you’ll find
              information about shopping for window treatments, along with
              instructions about how to use our site. If you have questions
              about our order policies such as Shipping, Warranty, SureFit™,
              Changing/Cancelling Orders, Payment, Privacy or Promotions &
              Exclusions, please visit our Order Policies page.
            </p>
            <hr />
            <div className="pv4-l ">
              <div id="using-blindscom" className="mt-5">
                <div className="main_accordion_section contact-accordion-section">
                  <div className="container">
                    <div
                      className="accordion accordion-flush mt-5"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item accordion-header pt-5">
                        <h5 className=" fw-semibold pt-1">Using Blinds.com</h5>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Are the colors for your products accurate?
                        </button>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Although we do our best to make sure that the colors
                            printed on our site are accurate, actual colors may
                            vary due to subtle color differences and textures
                            that may not be fully appreciated on some monitors
                            and/or display cards. The best way to ensure you’ll
                            be happy with your color is to request a sample
                            before placing your order – it’s free! Once you
                            receive your sample, keep in mind that all samples
                            may still have minimal color variations as stated by
                            the manufacturers. We’d also like to suggest that
                            you order all of your blinds of a given color at one
                            time, since there can be slight variations between
                            dye lots.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Are your products first quality? Do you sell any
                            secondhand products?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Unlike other sites, we only sell first quality
                            products. They are made at major brand factories to
                            your specifications and shipped directly to you.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Do you ship catalogues or brochures?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            We do not currently ship catalogues or brochures. We
                            work hard to ensure that all the information for our
                            products is available on our site, including
                            measuring instructions, installation instructions,
                            color charts and care/warranty information.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="sf-and-i-shutters-program">
              <div className="main_accordion_section contact-accordion-section">
                <div className="container">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item accordion-header pt-5">
                      <h5 className="fw-semibold mt-1 mb-4">
                        SF&I Shutters Program
                      </h5>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefour"
                        aria-expanded="false"
                        aria-controls="flush-collapsefour"
                      >
                        Are the colors for your products accurate?
                      </button>
                      <div
                        id="flush-collapsefour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Although we do our best to make sure that the colors
                          printed on our site are accurate, actual colors may
                          vary due to subtle color differences and textures that
                          may not be fully appreciated on some monitors and/or
                          display cards. The best way to ensure you’ll be happy
                          with your color is to request a sample before placing
                          your order – it’s free! Once you receive your sample,
                          keep in mind that all samples may still have minimal
                          color variations as stated by the manufacturers. We’d
                          also like to suggest that you order all of your blinds
                          of a given color at one time, since there can be
                          slight variations between dye lots.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          Are your products first quality? Do you sell any
                          secondhand products?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Unlike other sites, we only sell first quality
                          products. They are made at major brand factories to
                          your specifications and shipped directly to you.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                        >
                          Do you ship catalogues or brochures?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSix"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We do not currently ship catalogues or brochures. We
                          work hard to ensure that all the information for our
                          products is available on our site, including measuring
                          instructions, installation instructions, color charts
                          and care/warranty information.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="ordering-blinds-and-shades" className=" pt-1">
              <div className="main_accordion_section contact-accordion-section mt-4">
                <div className="container">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item accordion-header mt-5">
                      <h5 className="fw-semibold mt-3 pt-2">
                        Ordering Blinds and Shades
                      </h5>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Are the colors for your products accurate?
                      </button>
                      <div
                        id="flush-collapseSeven"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Although we do our best to make sure that the colors
                          printed on our site are accurate, actual colors may
                          vary due to subtle color differences and textures that
                          may not be fully appreciated on some monitors and/or
                          display cards. The best way to ensure you’ll be happy
                          with your color is to request a sample before placing
                          your order – it’s free! Once you receive your sample,
                          keep in mind that all samples may still have minimal
                          color variations as stated by the manufacturers. We’d
                          also like to suggest that you order all of your blinds
                          of a given color at one time, since there can be
                          slight variations between dye lots.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEight"
                          aria-expanded="false"
                          aria-controls="flush-collapseEight"
                        >
                          Are your products first quality? Do you sell any
                          secondhand products?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseEight"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Unlike other sites, we only sell first quality
                          products. They are made at major brand factories to
                          your specifications and shipped directly to you.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseNine"
                          aria-expanded="false"
                          aria-controls="flush-collapseNine"
                        >
                          Do you ship catalogues or brochures?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseNine"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We do not currently ship catalogues or brochures. We
                          work hard to ensure that all the information for our
                          products is available on our site, including measuring
                          instructions, installation instructions, color charts
                          and care/warranty information.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="after-your-order">
              <div className="main_accordion_section contact-accordion-section">
                <div className="container">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item accordion-header pt-1">
                      <h5 className="fw-semibold pt-5">After Your Order</h5>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTen"
                        aria-expanded="false"
                        aria-controls="flush-collapseTen"
                      >
                        Are the colors for your products accurate?
                      </button>
                      <div
                        id="flush-collapseTen"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Although we do our best to make sure that the colors
                          printed on our site are accurate, actual colors may
                          vary due to subtle color differences and textures that
                          may not be fully appreciated on some monitors and/or
                          display cards. The best way to ensure you’ll be happy
                          with your color is to request a sample before placing
                          your order – it’s free! Once you receive your sample,
                          keep in mind that all samples may still have minimal
                          color variations as stated by the manufacturers. We’d
                          also like to suggest that you order all of your blinds
                          of a given color at one time, since there can be
                          slight variations between dye lots.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEleven"
                          aria-expanded="false"
                          aria-controls="flush-collapseEleven"
                        >
                          Are your products first quality? Do you sell any
                          secondhand products?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseEleven"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Unlike other sites, we only sell first quality
                          products. They are made at major brand factories to
                          your specifications and shipped directly to you.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsetweive"
                          aria-expanded="false"
                          aria-controls="flush-collapsetweive"
                        >
                          Do you ship catalogues or brochures?
                        </button>
                      </h2>
                      <div
                        id="flush-collapsetweive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We do not currently ship catalogues or brochures. We
                          work hard to ensure that all the information for our
                          products is available on our site, including measuring
                          instructions, installation instructions, color charts
                          and care/warranty information.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Faq;
