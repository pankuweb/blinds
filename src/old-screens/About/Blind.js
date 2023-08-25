import React, { useEffect } from "react";
import blinds from "@/assets/images/blinds.webp";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { manageProductList } from "@/src/redux/actions/products";
import { useDispatch, useSelector } from "react-redux";
const Blind = () => {

  const distpatch = useDispatch()
  const list = useSelector((state)=>state?.products?.list)
useEffect(()=>{
  distpatch(manageProductList())
},[])

console.log(list,'list==>')

  return (
    <section>
      <div className="blind-sec">
        <div className="container  mb-5">
          <div className="row">
            <div className="col-12 col-sm-12  col-md-5 col-lg-6">
              <LazyLoadImage
                alt={blinds.alt}
                effect="blur"
                src={blinds.src}
                loading="lazy"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-6">
              <p className="p-0 m-0 about_company_pre">
                <sup>__</sup>About Your Company
              </p>
              <h2 className="fw-bold fs-1 mb-2">Blinds.com</h2>
              <p>
                Blinds.com is part of Global Custom Commerce (GCC), GCC is the
                largest pure play ecommerce retailer in the configurable home
                décor space, powering The Home Depot and our window covering
                brands. We are committed to continuously improving the shopping
                experience for customers, leading the way with innovations that
                have shifted what’s possible both online and inside
                brick-and-mortar stores. Blinds.com makes ordering custom
                blinds, shades, shutters and draperies surprisingly easy with
                over 30,000 five-star reviews, award-winning customer service,
                SureFit Guarantee and in-home measure and installation services.
              </p>
              <div className="row w-100">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fw-semibold">
                  <i className="bi bi-check2"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 18"
                    fill="none"
                    className="commercial-blue-section"
                  >
                    <g clipPath="url(#clip0_103_1994)">
                      <path
                        d="M0 8.18182L3.2 4.90909L9.6 11.4545L20.8 0L24 3.27273L9.6 18L0 8.18182Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Best quality support
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fw-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 18"
                    fill="none"
                    className="commercial-blue-section"
                  >
                    <g clipPath="url(#clip0_103_1994)">
                      <path
                        d="M0 8.18182L3.2 4.90909L9.6 11.4545L20.8 0L24 3.27273L9.6 18L0 8.18182Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Server the best
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fw-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 18"
                    fill="none"
                    className="commercial-blue-section"
                  >
                    <g clipPath="url(#clip0_103_1994)">
                      <path
                        d="M0 8.18182L3.2 4.90909L9.6 11.4545L20.8 0L24 3.27273L9.6 18L0 8.18182Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Money back guarantee
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fw-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 18"
                    fill="none"
                    className="commercial-blue-section"
                  >
                    <g clipPath="url(#clip0_103_1994)">
                      <path
                        d="M0 8.18182L3.2 4.90909L9.6 11.4545L20.8 0L24 3.27273L9.6 18L0 8.18182Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Trusted Professionals
                </div>
              </div>
              <button className="border-0 text-light fw-medium rounded-0 mx-3 mt-3">
                <small>LEARN MORE</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default trackWindowScroll(Blind);
