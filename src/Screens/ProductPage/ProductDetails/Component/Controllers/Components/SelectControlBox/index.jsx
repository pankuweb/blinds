import React from "react";

const SelectControlBox = ({
  cardImage,
  boxTitle,
  price,
  offPrice,
  description,
  isActive,
  onClick,
}) => {
  return (
    <div>
      <div className="product_banner_details">
        <div
          className={`border-setion-2 mb-3 ${
            isActive ? "border-selected" : ""
          }`}
          onClick={onClick}
        >
          <div className="position-relative container-radio mt-2 mx-3">
            <div className={`checkmark  ${isActive ? "active-radio" : ""}`}>
              <div className="rounded--00"></div>
            </div>
          </div>
          <div className="d-sm-block d-md-flex d-lg-flex justify-content-between p-3 w-100 gap-0 gap-sm-0 gap-md-3 gap-lg-3 ">
            <img src={cardImage} alt="card image" className="img-fluid" />
            <div>
              <h4>{boxTitle}</h4>
              <small>
                {price && `Adds $${price}`}
                {offPrice && (
                  <span className="text-decoration-line-through ms-2" lang="es">
                    ${offPrice}
                  </span>
                )}
              </small>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectControlBox;
