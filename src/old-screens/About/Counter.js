import React from "react";

const Counter = () => {
  return (
    <div className="counter-sec mb-5">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 col-md-3 col-sm-6 col-lg-3 col-lg-3">
            <h3 className="fw-bold fs-1">
              330<sup>+</sup>
            </h3>
            <button className="border-0 bg-light text-info">
              ACTIVE CLIENTS
            </button>
          </div>
          <div className="col-12 col-md-3 col-sm-6 col-lg-3 col-lg-3">
            <h3 className="fw-bold fs-1">
              980<sup>+</sup>
            </h3>
            <button className="border-0 text-info bg-light">
              ACTIVE CLIENTS
            </button>
          </div>
          <div className="col-12 col-md-3 col-sm-6 col-lg-3 col-lg-3">
            <h3 className="fw-bold fs-1">
              20<sup>+</sup>
            </h3>
            <button className="border-0 text-info bg-light">
              ACTIVE CLIENTS
            </button>
          </div>
          <div className="col-12 col-md-3 col-sm-6 col-lg-3 col-lg-3">
            <h3 className="fw-bold fs-1">
              112<sup>+</sup>
            </h3>
            <button className="border-0 text-info bg-light ">
              ACTIVE CLIENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
