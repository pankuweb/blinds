import Link from "next/link";
import product from "@/assets/images/product_image.webp";
import bgProduct from "@/assets/images/news+products.webp";
import UnoptimizedImage from "@/UnoptimizedImage";

const SpecialProduct = () => {
  return (
    <section>
      <div className="shop_by_products">
        <div className="container mb-5">
          <h3 className="text-center fw-semibold mb-5">Special Products</h3>
          <div className="special_by_products">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end border-end position-relative">
                <UnoptimizedImage
                  src={product}
                  alt="product_34"
                  className="img-fluid w-100 mb-2"
                  loading="lazy"
                />
                <div className="offer-bth position-absolute top-0">24% OFF</div>
                <pre className="fw-normal mb-1">Camp & Hike</pre>
                <p className="mb-1">
                  Steiner Optics HX Series Binoculars – Versatile Optics
                </p>
                <span lang="es">★★★★★</span>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="m-0">$540.36</p>
                    <small className="m-0">$714.10</small>
                  </div>
                  <Link
                    className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                    href="/product"
                  >
                    + Add to cart
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end border-end position-relative">
                <UnoptimizedImage
                  src={product}
                  alt="product_34"
                  className="img-fluid w-100 mb-2"
                  loading="lazy"
                />
                <div className="offer-bth position-absolute top-0">77% OFF</div>
                <div className="offer-bth position-absolute top-0 bg-dark offer-stock">
                  Out Of Stock
                </div>
                <pre className="fw-normal mb-1">Bike, Run</pre>
                <p className="mb-1">
                  OshKosh B’Gosh Unisex-Child Aquatic Water Shoe
                </p>
                <span lang="es">★★★★★</span>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="m-0">$540.36</p>
                    <small className="m-0">$714.10</small>
                  </div>
                  <Link
                    className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                    href="/product"
                  >
                    + Add to cart
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end border-end position-relative">
                <UnoptimizedImage
                  src={product}
                  alt="product_34"
                  className="img-fluid w-100 mb-2"
                  loading="lazy"
                />
                <div className="offer-bth position-absolute top-0">24% OFF</div>
                <pre className="fw-normal mb-1">Camp & Hike</pre>
                <p className="mb-1">
                  Steiner Optics HX Series Binoculars – Versatile Optics
                </p>
                <span lang="es">★★★★★</span>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="m-0">$540.36</p>
                    <small className="m-0">$714.10</small>
                  </div>
                  <Link
                    className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                    href="/product"
                  >
                    + Add to cart
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 position-relative">
                <UnoptimizedImage
                  src={product}
                  alt="product_34"
                  className="img-fluid w-100 mb-2"
                />
                <div className="offer-bth position-absolute top-0">77% OFF</div>
                <div className="offer-bth position-absolute top-0 bg-dark offer-stock">
                  Out Of Stock
                </div>
                <pre className="fw-normal mb-1">Bike, Run</pre>
                <p className="mb-1">
                  OshKosh B’Gosh Unisex-Child Aquatic Water Shoe
                </p>
                <span lang="es">★★★★★</span>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="m-0">$540.36</p>
                    <small className="m-0">$714.10</small>
                  </div>
                  <Link
                    className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                    href="/product"
                  >
                    + Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-rem-products">
          <div className="bg-color-products bg-text-products">
            <div className="bg-h25 h-25"></div>
            <div className="container">
              <div className="image-conent-products d-sm-block d-md-flex d-lg-flex position-relative">
                <div className="w-50">
                  <UnoptimizedImage
                    src={bgProduct}
                    alt="products"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="w-50 mt-2 mt-sm-4 mt-md-3 mt-lg-5">
                  <p className="fw-medium text-white">Deal Of The Month</p>
                  <h2 className="text-white fw-semibold">
                    Find Hundreds of Deals
                  </h2>
                  <p className="text-white fw-normal">
                    Hot camping and outdoor gear on sale
                  </p>
                  <div className="timer-products">
                    <div className="d-grid">
                      <span lang="es"></span>
                      <small className="text-white d-flex align-items-end text-uppercase fw-semibold">
                        Days
                      </small>
                    </div>
                    <span lang="es">:</span>
                    <div className="d-grid">
                      <span lang="es"></span>
                      <small className="text-white d-flex align-items-end text-uppercase fw-semibold">
                        Hrs
                      </small>
                    </div>
                    <span lang="es">:</span>
                    <div className="d-grid">
                      <span lang="es"></span>
                      <small className="text-white d-flex align-items-end text-uppercase fw-semibold">
                        Mins
                      </small>
                    </div>
                    <span lang="es">:</span>
                    <div className="d-grid">
                      <span lang="es">45</span>
                      <small className="text-white d-flex align-items-end text-uppercase fw-semibold">
                        Secs
                      </small>
                    </div>
                  </div>
                  <div className="special_by_products bg-white p-3">
                    <div className="row">
                      <div className="h-400 col-12 col-sm-6 col-md-6 col-lg-6 border-end position-relative">
                        <UnoptimizedImage
                          src={product}
                          alt="product_34"
                          className="img-fluid w-100 mb-2 alpha-sig-img"
                          loading="lazy"
                        />
                        <div className="offer-bth position-absolute top-0">
                          24% OFF
                        </div>
                        <pre className="fw-normal mb-1">Camp & Hike</pre>
                        <p className="mb-1 text-dark">
                          Steiner Optics HX Series Binoculars – Versatile Optics
                        </p>
                        <span lang="es">★★★★★</span>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="m-0 deal-month">$540.36</p>
                            <small className="m-0">$714.10</small>
                          </div>
                          <Link
                            className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                            href="/product"
                          >
                            + Add to cart
                          </Link>
                        </div>
                      </div>
                      <div className="h-400 col-12 col-sm-6 col-md-6 col-lg-6 position-relative">
                        <UnoptimizedImage
                          src={product}
                          alt="product_34"
                          className="img-fluid w-100 mb-2 alpha-sig-img"
                          loading="lazy"
                        />
                        <div className="offer-bth position-absolute top-0">
                          77% OFF
                        </div>
                        <div className="offer-bth position-absolute top-0 bg-dark offer-stock">
                          Out Of Stock
                        </div>
                        <pre className="fw-normal mb-1">Bike, Run</pre>
                        <p className="mb-1 text-dark">
                          OshKosh B’Gosh Unisex-Child Aquatic Water Shoe
                        </p>
                        <span lang="es">★★★★★</span>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="m-0 deal-month">$540.36</p>
                            <small className="m-0">$714.10</small>
                          </div>
                          <Link
                            className="text-uppercase text-decoration-none text-dark fw-medium btn btn-sm border-0"
                            href="/product"
                          >
                            + Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
