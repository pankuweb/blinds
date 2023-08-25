import React from "react";
import inovestion from "@/assets/images/inovestion.webp";
import designer from "@/assets/images/designer.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Inovetion = () => {
  return (
    <section>
      <div className="carousel-about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
              >
                <div className="carousel-indicators position-absolute top-100 start-50 translate-middle">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="img-fluid inovestion_img_section">
                      <h1 className="fw-bold">Innovation is at our core.</h1>
                      <div className="d-flex gap-4 py-3 px-sm-0 px-md-0 px-lg-5">
                        <LazyLoadImage
                          alt={designer.alt}
                          effect="blur"
                          src={designer.src}
                          loading="lazy"
                        />

                        <div className="d-block">
                          <h6>Mike Hardson</h6>
                          <span className="mb-5 text-info fw-bolder">
                            Senior Designer
                          </span>
                          <br />
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p>
                          Our startup venture, No Brainer Blinds, became the
                          first e-commerce platform to sell a custom,
                          made-to-measure window treatments entirely online. As
                          our company evolved into Blinds.com, we fearlessly
                          embraced new emerging technologies with the attitude
                          that we’d do anything it takes to deliver the best
                          customer service. That led to product innovations like
                          Instafit and Simplicity Shutters, allowing customers
                          to install custom window treatments themselves easily.
                          We adopted digital print-on-demand technology in the
                          décor space and have been committed to reducing waste
                          in our production processes. Recently, we developed
                          Simply Eco Cellular Shades, an eco-friendly product
                          made from recycled water bottles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="img-fluid inovestion_img_section">
                      <h1 className="fw-bold">Innovation is at our core.</h1>
                      <div className="d-flex  py-3 ">
                        <LazyLoadImage
                          alt={designer.alt}
                          effect="blur"
                          src={designer.src}
                          loading="lazy"
                        />

                        <div className="d-block">
                          <h6>Mike Hardson</h6>
                          <span className="mb-5 text-info fw-bolder">
                            Senior Designer
                          </span>
                          <br />
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <p>
                        Our startup venture, No Brainer Blinds, became the first
                        e-commerce platform to sell a custom, made-to-measure
                        window treatments entirely online. As our company
                        evolved into Blinds.com, we fearlessly embraced new
                        emerging technologies with the attitude that we’d do
                        anything it takes to deliver the best customer service.
                        That led to product innovations like Instafit and
                        Simplicity Shutters, allowing customers to install
                        custom window treatments themselves easily. We adopted
                        digital print-on-demand technology in the décor space
                        and have been committed to reducing waste in our
                        production processes. Recently, we developed Simply Eco
                        Cellular Shades, an eco-friendly product made from
                        recycled water bottles.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-fluid inovestion_img_section">
                      <h1 className="fw-bold">Innovation is at our core.</h1>
                      <div className="d-flex py-3 ">
                        <LazyLoadImage
                          alt={designer.alt}
                          effect="blur"
                          src={designer.src}
                          loading="lazy"
                        />

                        <div className="d-block">
                          <h6>Mike Hardson</h6>
                          <span className="mb-5 text-info fw-bolder">
                            Senior Designer
                          </span>
                          <br />
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                          <svg width="15px" height="15px" viewBox="0 0 24 24">
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <p>
                        Our startup venture, No Brainer Blinds, became the first
                        e-commerce platform to sell a custom, made-to-measure
                        window treatments entirely online. As our company
                        evolved into Blinds.com, we fearlessly embraced new
                        emerging technologies with the attitude that we’d do
                        anything it takes to deliver the best customer service.
                        That led to product innovations like Instafit and
                        Simplicity Shutters, allowing customers to install
                        custom window treatments themselves easily. We adopted
                        digital print-on-demand technology in the décor space
                        and have been committed to reducing waste in our
                        production processes. Recently, we developed Simply Eco
                        Cellular Shades, an eco-friendly product made from
                        recycled water bottles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <LazyLoadImage
                alt={inovestion.alt}
                effect="blur"
                src={inovestion.src}
                loading="lazy"
                className="img-fluid w-100 inovestion_img_section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inovetion;
