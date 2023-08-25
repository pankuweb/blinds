import Layout from "@/src/components/Layout";
import checkout from "@/assets/images/checkout.webp";
import React from "react";
import Link from "next/link";
import UnoptimizedImage from "@/UnoptimizedImage";
const Checkout = () => {
  return (
    <section>
      <Layout>
        <div className="p-4 p-sm-4 p-md-5 p-lg-5">
          <h2 className="fw-semibold">Checkout</h2>
          <div className="check_out_sec py-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="check_out_form p-4 rounded-4">
                  <form className="row g-3">
                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <h5 className="fw-semibold">Contact</h5>
                        <div className="fw-semibold ">
                          Already have an account?
                          <Link href="/sign-in">
                            <span
                              className="fw-bold text-decoration-underline"
                              lang="es"
                            >
                              Log in
                            </span>
                          </Link>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="inputAddress"
                        name="inputAddress"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked"
                          name="flexCheckChecked"
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor="flexCheckChecked"
                        >
                          Email me with news and offers
                        </label>
                        <div className="invalid-feedback">
                          Email me with news and offers
                        </div>
                      </div>
                    </div>
                    <h5 className="fw-semibold">Shipping address</h5>
                    <div className="col-12">
                      <select
                        defaultValue="United States"
                        className="form-select fw-medium"
                        name="United States"
                        id="United States"
                      >
                        <option value="">United States</option>
                        <option value="ind">...</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control fw-medium p-2"
                        id="f_name"
                        name="f_name"
                        placeholder="First name (optional)"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control fw-medium p-2"
                        id="l_name"
                        name="l_name"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="company"
                        name="company"
                        placeholder="Company (optional)"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="search"
                        className="form-control fw-medium p-2"
                        id="address"
                        name="address"
                        placeholder="Address"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="studio"
                        name="studio"
                        placeholder="Apartment,studio,etc.(optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="city"
                        name="city"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-4">
                      <select
                        defaultValue="State"
                        className="form-select"
                        name="States"
                        id="States"
                      >
                        <option value="">State</option>
                        <option value="State">...</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="inputZip"
                        name="inputZip"
                        placeholder="ZIP code"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fw-medium p-2"
                        id="phone"
                        name="phone"
                        placeholder="Phone (optional)"
                      />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 checkout_form_btn text-end text-lg-end text-sm-end">
                      <button className="px-5 py-2" type="submit">
                        continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="border rounded-4 position-relative">
                  <div className="checkout-right-section mx-5 my-4">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-center text-lg-start">
                        <UnoptimizedImage
                          src={checkout}
                          alt="checkout"
                          className="img-fluid"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-8">
                        <div className="d-flex">
                          <input placeholder="Gift card or discount code" />
                          <a href="#" className="btn-discount-code">
                            Apply
                          </a>
                        </div>
                        <div className="mb-3"></div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold" lang="es">
                            Subbtotal
                          </span>
                          <p className="fw-bold mb-0">$32.00</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold" lang="es">
                            Shipping
                          </span>
                          <p className="mb-0 text-end">
                            Calculated at next step
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold" lang="es">
                            Total
                          </span>
                          <p className="mb-0">
                            USD<b className="mx-1">$32.00</b>
                          </p>
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
    </section>
  );
};

export default Checkout;
