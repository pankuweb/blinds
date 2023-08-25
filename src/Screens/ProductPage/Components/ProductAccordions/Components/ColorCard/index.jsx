import React from "react";
import Link from "next/link";

const ColorCard = ({ color, isActive, onClick }) => {
  return (
    <div className="col position-relative mb-4">
      <div className="products-color-section">
        <div onClick={onClick} className={`mb-2 card_grid-column ${isActive}`}>
          <img src={color?.image} className="w-100 h-auto" alt="img_sec" />
          <div className="position-absolute top-0 end-0 btn-grid-col">
            ${color?.price}
          </div>
          <div className="card-body p-0 position-absolute bottom-0 w-100">
            <p>{color?.name}</p>
          </div>
          <div className="blue_tik__grid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 18"
              fill="none"
              className="fa-check"
            >
              <g clipPath="url(#clip0_103_1994)">
                <path
                  d="M0 8.18182L3.2 4.90909L9.6 11.4545L20.8 0L24 3.27273L9.6 18L0 8.18182Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_103_1994">
                  <rect width="24" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="main_btn_simple">
        <div className="text-center  mb-2 mb-md-2 mb-lg-2">
          <Link className="order_sample_btn" href="/">
            Simple Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
