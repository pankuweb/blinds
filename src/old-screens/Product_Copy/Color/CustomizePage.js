const CustomizePage = ({
  imgTitle,
  title,
  AddsPrice,
  titlePre,
  linePrice,
  className,
  onClick,
  isSectionActive,
}) => {
  return (
    <section>
      <div className="product_banner_details">
        <div
          className={`border-setion-2 mb-3 ${
            isSectionActive ? "border-selected" : ""
          }`}
          onClick={onClick}
        >
          <div className="position-relative container-radio mt-2 mx-3">
            <div
              className={`checkmark  ${isSectionActive ? "active-radio" : ""}`}
              onClick={onClick}
            >
              <div className="rounded--00"></div>
            </div>
          </div>
          <div className="d-sm-block d-md-flex d-lg-flex justify-content-between p-3 w-100 gap-0 gap-sm-0 gap-md-3 gap-lg-3 ">
            <img src={imgTitle.src} alt="banner_Left" className="img-fluid" />
            <div>
              <h4>{title}</h4>
              <small className={className}>
                {AddsPrice}
                <span className="text-decoration-line-through ms-2" lang="es">
                  {linePrice}
                </span>
              </small>
              <p>{titlePre}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizePage;
