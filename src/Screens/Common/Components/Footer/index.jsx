import Link from "next/link";
import footerImage from "@/assets/images/footer1_img.svg";
import UnoptimizedImage from "@/UnoptimizedImage";
const Footer = () => {
  return (
    <section>
      <div className="footer_main_section">
        <div className="main_center_section">
          <div className="container">
            <h6 className="mb-4 text-uppercase fs-5">Trekky</h6>
            <div className="footer-ul-section d-sm-block d-md-block d-lg-flex">
              <div className="footer-w-25 w-25">
                <ul className="m-0 p-0">
                  <li>
                    <p>
                      If you’d rather be in the mountains right now and you love
                      all the gear, footwear, and apparel that keeps you
                      outside, you’ve come to the right place.
                    </p>
                  </li>
                  <li className="d-sm-block d-md-block  d-lg-block d-xl-block d-xxl-flex justify-content-lg-between">
                    <section>
                      <span className="fw-semibold" lang="es">
                        Call Us –
                      </span>
                      <span className="phone_footer" lang="es">
                        <Link href="tel:800-505-1905" aria-label="800-505-1905">
                          800-505-1905
                        </Link>
                      </span>
                    </section>
                    <div className="social-icons-fa">
                      <Link
                        href="https://www.facebook.com"
                        aria-label="https://www.facebook.com"
                        className="ms-2"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          fill="#505050"
                          viewBox="0 0 24 24"
                          id="facebook"
                          data-name="Flat Color"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon flat-color"
                        >
                          <path
                            id="primary"
                            d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
                          ></path>
                        </svg>
                      </Link>
                      <Link
                        href="https://www.twitter.com"
                        aria-label="https://www.twitter.com"
                        className="ms-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 15 14"
                          fill="#505050"
                        >
                          <g clipPath="url(#clip0_763_96)">
                            <path
                              d="M12.7997 4.15408C12.809 4.23799 12.8137 4.35921 12.8137 4.51771C12.8137 5.48741 12.6365 6.44778 12.2822 7.39883C11.9092 8.37785 11.3824 9.25431 10.7018 10.0282C9.9745 10.8487 9.12135 11.4874 8.14233 11.9443C7.0794 12.4385 5.91389 12.6855 4.64583 12.6855C3.84396 12.6855 3.06541 12.5737 2.31016 12.3499C1.57357 12.1261 0.883591 11.8091 0.240234 11.3988C0.445363 11.4175 0.678463 11.4268 0.939535 11.4268C1.59222 11.4268 2.22392 11.3219 2.83464 11.1121C3.44536 10.9023 3.99781 10.6016 4.49198 10.21C3.86727 10.1914 3.31016 9.9979 2.82065 9.6296C2.33114 9.2613 1.99315 8.79277 1.80667 8.22401C2.0118 8.25198 2.19361 8.26597 2.35212 8.26597C2.60387 8.26597 2.85562 8.23333 3.10737 8.16806C2.66914 8.07482 2.2752 7.89534 1.92555 7.6296C1.5759 7.36387 1.30317 7.03054 1.10737 6.6296C0.911563 6.22867 0.813661 5.79977 0.813661 5.34289V5.31492C1.21459 5.53869 1.6435 5.65991 2.10037 5.67855C1.70877 5.41748 1.39874 5.07716 1.1703 4.65757C0.941866 4.23799 0.827647 3.78112 0.827647 3.28695C0.827647 2.7648 0.958183 2.27995 1.21926 1.8324C1.9372 2.71818 2.79967 3.42214 3.80667 3.94429C4.85096 4.48508 5.96051 4.78345 7.13534 4.83939C7.08872 4.61562 7.06541 4.3965 7.06541 4.18205C7.06541 3.66923 7.19361 3.19137 7.45002 2.74848C7.70643 2.30559 8.05375 1.95594 8.49198 1.69953C8.93021 1.44312 9.4104 1.31492 9.93254 1.31492C10.3428 1.31492 10.7274 1.39417 11.0864 1.55268C11.4454 1.71119 11.76 1.93496 12.0304 2.22401C12.6738 2.09347 13.2799 1.86037 13.8486 1.52471C13.7461 1.86037 13.5852 2.1634 13.3661 2.4338C13.147 2.7042 12.8883 2.92797 12.5899 3.10513C13.14 3.04918 13.6901 2.90466 14.2402 2.67156C13.8393 3.24965 13.3591 3.74382 12.7997 4.15408Z"
                              fill="black"
                            />
                          </g>
                        </svg>
                      </Link>
                      <Link
                        href="https://www.instagram.com"
                        aria-label="https://www.instagram.com"
                        className="ms-2"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="-2 -2 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMinYMin"
                          className="jam jam-instagram"
                          fill="#505050"
                        >
                          <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
                          <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
                          <circle cx="15.156" cy="4.858" r="1.237" />
                        </svg>
                      </Link>
                      <Link
                        href="https://www.pinterest.com"
                        aria-label="https://www.pinterest.com"
                        className="ms-2"
                      >
                        <svg
                          fill="none"
                          width="20px"
                          height="20px"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C6.46585 15 5.48059 14.7907 4.58427 14.4121L6.49504 10.0447C6.97541 10.6368 7.70586 11 8.5 11C10.433 11 12 9.433 12 7.5V7C12 4.79086 10.2091 3 8 3H7C4.79086 3 3 4.79086 3 7V7.5C3 8.39609 3.33741 9.21457 3.89133 9.83346L4.63646 9.16654C4.2403 8.72391 4 8.14062 4 7.5V7C4 5.34315 5.34315 4 7 4H8C9.65685 4 11 5.34315 11 7V7.5C11 8.88071 9.88071 10 8.5 10C7.81943 10 7.21522 9.56451 7 8.91886L6.99463 8.90274L7.95815 6.70041L7.04199 6.29959L3.68991 13.9615C1.48133 12.6564 0 10.2512 0 7.5Z"
                            fill="#505050"
                          />
                        </svg>
                      </Link>
                    </div>
                  </li>
                  <li>support@gmail.com</li>
                </ul>
              </div>
              <div className=" footer-75 d-flex w-75 gap-2 ms-sm-0 ms-md-0 ms-lg-5">
                <ul className="m-0 p-0 footer-25 w-25">
                  <li className="fw-semibold fs-6">Chat with us</li>
                  <li>Store</li>
                  <li>Store locator</li>
                  <li>Membership</li>
                  <li>Events</li>
                </ul>
                <ul className="m-0 p-0 footer-25 w-25">
                  <li className="fw-semibold">Company</li>
                  <li>
                    <Link href="/about" aria-label="about">
                      About Us
                    </Link>
                  </li>
                  <li>Careers</li>
                  <li>
                    <Link href="/affiliates" aria-label="affiliates">
                      Affiliates
                    </Link>
                  </li>
                  <li>
                    <Link href="/commercial" aria-label="commercial">
                      Commercial Blinds
                    </Link>
                  </li>
                </ul>
                <ul className="m-0 p-0 footer-25 w-25">
                  <li className="fw-semibold">Shop</li>
                  <li>Our Guarantee</li>
                  <li>Customer Service</li>
                  <li>Membership</li>
                  <li>Events</li>
                </ul>
                <ul className="m-0 p-0 footer-25 w-25">
                  <li className="fw-semibold" aria-label="Help center">
                    Help center
                  </li>
                  <li>
                    <Link href="/track-order" aria-label="Track an Order">
                      Track an Order
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" aria-label="FAQ">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/order-policies" aria-label="Order Policies">
                      Order Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-label="Contact Us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main_bottom_section">
          <div className="container d-flex justify-content-lg-between text-center">
            <p className="m-0">Copyright © 2022 .All Rights Reserved.</p>
            <ul className="d-none d-sm-none d-md-none d-xl-flex">
              <li className="me-2">
                <Link
                  href="/terms-and-conditions"
                  aria-label="Terms & Conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="me-2">
                <Link href="/privacy" aria-label="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="me-2">
                <Link href="/california-supply" aria-label="California Supply">
                  California Supply
                </Link>
              </li>
              <li className="me-2">
                <Link href="/sitemap" aria-label="Site Map">
                  Site Map
                </Link>
              </li>
            </ul>
            <div className="d-none d-sm-none d-md-none d-xl-flex">
              <UnoptimizedImage src={footerImage} alt="footerImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
