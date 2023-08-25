const CardCommon = ({
  imgsrc,
  colorcode,
  adPrice,
  bottomPrice,
  isActive,
  onClick,
  classHover,
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
          <img src={imgsrc} className="card-img-top" alt="img-src" />
          <div className={classHover}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              role="presentation"
              data-obj="gcc-swatch-zoom-in"
              tabIndex="0"
              className="sc-fWIMVQ hIuxoH"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
            </svg>
            <div className="overlay-swatch-zoom">
              <img src={imgsrc} className="card-img-top" alt="img-src" />
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <p className="card-title">{colorcode}</p>
          <small>
            {adPrice}
            <span className="text-decoration-line-through ms-2" lang="es">
              {bottomPrice}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};
CardCommon.defaultProps = {
  classHover: "container-swatch-zoom position-absolute top-0 end-0",
};
export default CardCommon;
