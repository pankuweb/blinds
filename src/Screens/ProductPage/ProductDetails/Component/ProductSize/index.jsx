import React, { useEffect, useState } from "react";
import home_icons from "@/assets/images/home-icons.webp";
import swap_horiz from "@/assets/images/swap_horiz.svg";
import Link from "next/link";

const ProductSize = ({ productData, getSeletedSizes }) => {
  const [sizeSelection, setSizeSelection] = useState({});
  const handleSizeSelectionUpdate = (processName, newData) => {
    setSizeSelection((prevData) => ({
      ...prevData,
      [processName]: newData,
    }));
  };
  useEffect(() => {
    getSeletedSizes(sizeSelection);
  }, [sizeSelection]);

  const heightAndWidth = (startPoint, endPoint, text) => {
    const options = [];
    for (let i = startPoint; i <= endPoint; i++) options.push(i);
    return options.map((option, index) => {
      return (
        <option key={index}>
          {option}
          {text}
        </option>
      );
    });
  };
  const blindDetails = productData && productData?.product;
  return (
    <section>
      <div className="product_size_section">
        <div className="container">
          <div className="d-flex align-items-center gap-1">
            <h3 className="fw-semibold">Enter Size</h3>
            <small>Inches</small>
          </div>
          <div className="mb-3"></div>
          <div className="product-size-error d-flex align-items-baseline p-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <p className="m-0">
              Please select a Mount Type before entering measurements
            </p>
          </div>
          <div className="mb-3"></div>

          <div className="d-flex gap-2">
            <div className="products-content w-50">
              <div className="d-flex align-items-center gap-1">
                <h3 className="fw-semibold">Width</h3>
                <img src={swap_horiz.src} alt="swap_horiz" />
              </div>
              <div className="main-gap-section d-flex align-items-center gap-3 m-0">
                <div className="gcc-dropdown position-relative">
                  <select
                    id="name_20"
                    name="blindWidth"
                    autoComplete="off"
                    onChange={(i) =>
                      handleSizeSelectionUpdate("blind_width_inches", {
                        width: i?.target?.value,
                      })
                    }
                  >
                    {heightAndWidth(
                      blindDetails?.width_from,
                      blindDetails?.width_to
                    )}
                  </select>
                  <label
                    className="form-label position-absolute top-0 start-0 z-10 text-dark"
                    htmlFor="name_20"
                  >
                    Inches
                  </label>
                </div>
                <div className="position-relative">
                  <select
                    id="name_0.125"
                    name="name_0.125"
                    autoComplete="off"
                    onChange={(i) =>
                      handleSizeSelectionUpdate("blind_width_eighths", {
                        width: i?.target?.value,
                      })
                    }
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                  </select>
                  <label
                    className="form-label position-absolute top-0 start-0 text-dark"
                    htmlFor="name_0.125"
                  >
                    Eighths
                  </label>
                </div>
              </div>
            </div>
            <div className="products-content w-100">
              <div className="d-flex align-items-center gap-1">
                <h3 className="fw-semibold">Height</h3>
                <img src={swap_horiz.src} alt="swap_horiz" />
              </div>
              <div className="main-gap-section d-flex align-items-center gap-3 m-0">
                <div className="gcc-dropdown position-relative">
                  <select
                    id="name_21"
                    name="blindHeight"
                    autoComplete="off"
                    onChange={(i) =>
                      handleSizeSelectionUpdate("blind_height_inches", {
                        height: i?.target?.value,
                      })
                    }
                  >
                    {heightAndWidth(
                      blindDetails?.height_from,
                      blindDetails?.height_to
                    )}
                  </select>
                  <label
                    className="form-label position-absolute top-0 start-0 z-10 text-dark"
                    htmlFor="name_21"
                  >
                    Inches
                  </label>
                </div>
                <div className="position-relative">
                  <select
                    defaultValue="0.125"
                    id="name_25"
                    name="name_25"
                    autoComplete="off"
                    onChange={(i) =>
                      handleSizeSelectionUpdate("blind_height_eighths", {
                        height: i?.target?.value,
                      })
                    }
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                  </select>
                  <label
                    className="form-label position-absolute top-0 start-0 text-dark"
                    htmlFor="name_25"
                  >
                    Eighths
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4"></div>
          <div className="border-bottom"></div>
          <div className="mb-4"></div>
          <div>
            <button className="whole_product_home border-0 rounded-top">
              $199 Whole Home
            </button>
            <div className="home_icons">
              <div className="whole_rounded_color rounded-bottom border-0 d-flex align-items-center text-dark p-3 gap-3">
                <img src={home_icons.src} alt="home_icons" />
                <div className="">
                  <h6 className="m-0">Want Professional Installation?</h6>
                  <small>
                    You can now add at checkout with just one click - it's easy!
                  </small>
                  <div>
                    <Link href="#" className="text-decoration-none">
                      How it works
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4"></div>
        </div>
      </div>
    </section>
  );
};
export default ProductSize;
