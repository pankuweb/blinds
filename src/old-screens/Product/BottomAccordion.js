import Link from "next/link";
import productId from "@/assets/images/productId-meta.webp";
import ProductCommon from "./ProductCommon";
import UnoptimizedImage from "@/UnoptimizedImage";

const BottomAccordion = ({ data }) => {
  console.log(data?.product?.color, "data====>");

  return (
    <section>
      <div className="main_accordion_section">
        <div className="container-fluid">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Available Colors
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body p-4">
                  <div className="available_colors_section">
                    <div className="row d-sm-block d-lg-flex">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="d-none d-md-none d-lg-block available_left_section position-sticky vh-0 vh-md-100 vh-lg-100 top-0 bottom-0">
                          <h3 className="fw-semibold mb-3">Preview</h3>
                          <div className="mb-2">
                            <button>New</button>
                            <small className="fs-6">
                              Enhanced Product Preview
                            </small>
                          </div>
                          <div className="card rounded-0 shadow-lg position-relative">
                            <UnoptimizedImage
                              src={productId}
                              className="card-img-top shadow"
                              alt="product_Id"
                              loading="lazy"
                            />
                            <button className="position-absolute top-0 end-0 m-3 py-1 px-3 fw-medium">
                              Zoom In
                            </button>
                            <div className="card-body text-center p-4 p-md-4 p-lg-4">
                              <p className="card-text m-0">
                                <s>$92.99</s>
                                <span
                                  className="ms-1 text-dark fw-medium"
                                  lang="es"
                                >
                                  SAVE 30%
                                </span>
                              </p>
                              <h2 className="card-title mb-3">$65.09</h2>
                              <Link
                                href="/product/1/custome-product"
                                className="btn"
                              >
                                Customize and Buy
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <ProductCommon />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offcanvas-btn d-sm-block d-md-block d-lg-none">
                  <button
                    className=" border border-primary px-4 py-2 text-light top-0 right-0 rounded preview-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    Preview
                  </button>

                  <div
                    className="offcanvas offcanvas-end w-75 "
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div className="offcanvas-header">
                      <button
                        type="button"
                        className="btn-close text-light"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <div className="available_left_section position-sticky vh-0 vh-md-100 vh-lg-100 top-0 bottom-0">
                        <h3 className="fw-semibold mb-3">Preview</h3>
                        <div className="mb-2">
                          <button>New</button>
                          <small className="fs-6">
                            Enhanced Product Preview
                          </small>
                        </div>
                        <div className="card rounded-0 shadow-lg position-relative">
                          <UnoptimizedImage
                            src={productId}
                            className="card-img-top shadow"
                            alt="product_Id"
                            loading="lazy"
                          />
                          <button className="position-absolute top-0 end-0 m-3 py-1 px-3 fw-medium">
                            Zoom In
                          </button>
                          <div className="card-body text-center p-4 p-md-4 p-lg-4">
                            <p className="card-text m-0">
                              <s>$92.99</s>
                              <span
                                className="ms-1 text-dark fw-medium"
                                lang="es"
                              >
                                SAVE 30%
                              </span>
                            </p>
                            <h2 className="card-title mb-3">$65.09</h2>
                            <Link
                              href="/product/1/custome-product"
                              className="btn"
                            >
                              Customize and Buy
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Product Details
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Veneta Designer Blackout Cellular Shades are made from the
                  finest materials. Perfect for rooms that required light
                  blocking ability during the day like media rooms, nurseries
                  and bedrooms for daytime sleepers. Cellular fabrics add
                  insulation to your windows, helping to regulate interior
                  temperatures and save on energy costs. Select from a wide
                  range of colors and patterns to liven up any room. The ultra
                  slim top-down/bottom-up ClearFit™ style shade, is a Veneta
                  exclusive product that mounts securely on all four corners of
                  any window - making it a great solution for French doors and
                  skylights. The Day & Night shade option combines sheer and
                  room darkening fabrics for complete light and privacy control.
                  Choose between five different cell sizes to match your style
                  and insulation needs. All available lift systems include:
                  Bottom-Up, Top-Down/Bottom-Up, Day & Night, Motorized,
                  ClearFit™.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Product Specifications
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Veneta Designer Blackout Cellular Shades are made from the
                  finest materials. Perfect for rooms that required light
                  blocking ability during the day like media rooms, nurseries
                  and bedrooms for daytime sleepers. Cellular fabrics add
                  insulation to your windows, helping to regulate interior
                  temperatures and save on energy costs. Select from a wide
                  range of colors and patterns to liven up any room. The ultra
                  slim top-down/bottom-up ClearFit™ style shade, is a Veneta
                  exclusive product that mounts securely on all four corners of
                  any window - making it a great solution for French doors and
                  skylights. The Day & Night shade option combines sheer and
                  room darkening fabrics for complete light and privacy control.
                  Choose between five different cell sizes to match your style
                  and insulation needs. All available lift systems include:
                  Bottom-Up, Top-Down/Bottom-Up, Day & Night, Motorized,
                  ClearFit™.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Customer Reviews & Photos
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Veneta Designer Blackout Cellular Shades are made from the
                  finest materials. Perfect for rooms that required light
                  blocking ability during the day like media rooms, nurseries
                  and bedrooms for daytime sleepers. Cellular fabrics add
                  insulation to your windows, helping to regulate interior
                  temperatures and save on energy costs. Select from a wide
                  range of colors and patterns to liven up any room. The ultra
                  slim top-down/bottom-up ClearFit™ style shade, is a Veneta
                  exclusive product that mounts securely on all four corners of
                  any window - making it a great solution for French doors and
                  skylights. The Day & Night shade option combines sheer and
                  room darkening fabrics for complete light and privacy control.
                  Choose between five different cell sizes to match your style
                  and insulation needs. All available lift systems include:
                  Bottom-Up, Top-Down/Bottom-Up, Day & Night, Motorized,
                  ClearFit™.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Questions and Answers
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Veneta Designer Blackout Cellular Shades are made from the
                  finest materials. Perfect for rooms that required light
                  blocking ability during the day like media rooms, nurseries
                  and bedrooms for daytime sleepers. Cellular fabrics add
                  insulation to your windows, helping to regulate interior
                  temperatures and save on energy costs. Select from a wide
                  range of colors and patterns to liven up any room. The ultra
                  slim top-down/bottom-up ClearFit™ style shade, is a Veneta
                  exclusive product that mounts securely on all four corners of
                  any window - making it a great solution for French doors and
                  skylights. The Day & Night shade option combines sheer and
                  room darkening fabrics for complete light and privacy control.
                  Choose between five different cell sizes to match your style
                  and insulation needs. All available lift systems include:
                  Bottom-Up, Top-Down/Bottom-Up, Day & Night, Motorized,
                  ClearFit™.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomAccordion;
