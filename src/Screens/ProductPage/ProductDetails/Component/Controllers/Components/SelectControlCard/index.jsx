import React from "react";

const SelectControlCard = ({
  image,
  cartTitle,
  price,
  offPrice,
  isActive,
  onClick,
}) => {
  return (
    <div className="micro-frontend-product-card mb-4">
      <div
        className={`card shadow h-100 border-0 p-2 text-center position-relative ${
          isActive ? "active" : ""
        }`}
        onClick={onClick}
      >
        <div className="position-relative container-radio my-2">
          <div
            className={`checkmark  ${isActive ? "active-radio" : ""}`}
            onClick={onClick}
          >
            <div className="rounded--00"></div>
          </div>
        </div>
        <div className="position-relative">
          <img src={image} className="card-img-top" alt="img-src" />
        </div>
        <div className="card-body p-0">
          <p className="card-title">{cartTitle}</p>
          <small>
            {price}
            <span className="text-decoration-line-through ms-2" lang="es">
              {offPrice}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SelectControlCard;
