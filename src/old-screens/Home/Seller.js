import Link from "next/link";
import product from "@/assets/images/product_image.webp";
import UnoptimizedImage from "@/UnoptimizedImage";

const Seller = () => {
  return (
    <section>
      <div className="shop_by_seller">
        <div className="container mb-5">
          <h3 className="text-center fw-semibold mb-5">Best Sellers</h3>
          <div className="special_by_products">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end position-relative">
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
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end position-relative">
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
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end position-relative">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Seller;
