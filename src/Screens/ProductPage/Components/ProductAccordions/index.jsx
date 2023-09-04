import Link from "next/link";
import productId from "@/assets/images/productId-meta.webp";
import UnoptimizedImage from "@/UnoptimizedImage";
import ColorCell from "./Components/CollorCell";
const ProductAccordion = ({ productDetails, getDetails, data }) => {
  const handleGetColors = (colorObj) => {
    getDetails(colorObj);
  };

  const productData = data?.product ? data?.product : "";
  function titleToSlug(title) {
    let slug = title?.toLowerCase();
    slug = slug?.replace(/\s+/g, "-");
    slug = slug?.replace(/[^a-z0-9-]/g, "");
    return slug;
  }

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
                                <s>
                                  {productData?.discount_price &&
                                    `$${productData?.discount_price}`}
                                </s>
                                <span
                                  className="ms-1 text-dark fw-medium"
                                  lang="es"
                                >
                                  SAVE 30%
                                </span>
                              </p>
                              <h2 className="card-title mb-3">
                                {productData?.unit_price &&
                                  `$${productData?.unit_price}`}
                              </h2>
                              <Link
                                href={{
                                  pathname: `/product/[slug]/[id]`,
                                  query: {
                                    state: JSON.stringify(productDetails),
                                  },
                                }}
                                as={`/product/${productData?.id}/${titleToSlug(
                                  productData?.title
                                )}`}
                                className="btn"
                              >
                                Customize and Buy
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <ColorCell
                          colors={productData?.color}
                          getSelectedColor={(item) => handleGetColors(item)}
                        />
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
                              <s>
                                {productData?.discount_price &&
                                  `$${productData?.discount_price}`}
                              </s>
                              <span
                                className="ms-1 text-dark fw-medium"
                                lang="es"
                              >
                                SAVE 30%
                              </span>
                            </p>
                            <h2 className="card-title mb-3">
                              {productData?.unit_price &&
                                `$${productData?.unit_price}`}
                            </h2>
                            <Link
                              href={`/product/${productData?.id}/${titleToSlug(
                                productData?.title
                              )}`}
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
                  {productData?.long_description &&
                    productData?.long_description}
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
                  {productData?.long_description &&
                    productData?.long_description}
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
                  {productData?.long_description &&
                    productData?.long_description}
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
                  {productData?.long_description &&
                    productData?.long_description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAccordion;
