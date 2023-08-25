import { useState, useEffect } from "react";
import SelectControl from "./SelectControl";
import banner_Left from "@/assets/images/banner-image.webp";
import CardCommon from "./CardCommon";
import CustomizePage from "./CustomizePage";
import RoundedColor from "./RoundedColor";

const Controls = ({ product, leftControl, getSelectedControlls }) => {
  const [activeTitle, setActiveTitle] = useState(0);
  const [activeRounded, setActiveRounded] = useState(0);
  const [activeChoose, setActiveChoose] = useState(0);

  //
  const productClothTapeData = product ? product?.product?.cloth_tap_color : "";
  const [activeIndex, setActiveIndex] = useState(null);
  const [slctControl, setSlctControl] = useState();
  const [slctTilt, setSlctTilt] = useState();
  const [slcBlockLight, setSlcBlockLight] = useState();
  const [slcHeadrail, setSlcHeadrail] = useState({
    price: "",
    type: "",
  });
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    if (leftControl && leftControl[0]) {
      setActiveIndex(0);
      setSlctControl(leftControl[0]);
      setSlctTilt("Wand");
      setSlcBlockLight("Standard");
    }
  }, [leftControl]);
  useEffect(() => {
    const payload = {
      controlls: slctControl,
      tilt: slctTilt,
      block_light: slcBlockLight,
      cloth_color: activeRounded,
      // headrail: slcHeadrail,
    };
    getSelectedControlls(payload);
  }, [slctControl, slctTilt, slcBlockLight, activeRounded]);
  //
  const handleImage = (index) => {
    setActiveTitle(index);
  };
  const handleImageRounded = (index) => {
    setActiveRounded(index);
  };
  const handleImageChoose = (index) => {
    setActiveChoose(index);
  };
  // *****************
  const [headrailStyle, setHeadrailStyle] = useState();
  const [activeBlockLight, setActiveBlockLight] = useState(0);

  const getHeadrails = (sclt) => {
    if (sclt?.type === "standard") {
      const values = {
        type: sclt?.type,
        controll_side: headrailStyle,
      };
      console.log(values);
    }
    if (sclt?.type === "2to1") {
      console.log(sclt, "sclt===>");
    }
  };
  // ******
  return (
    <section>
      <div className="select_lift_control">
        <h4 className="fw-semibold">Choose your lift</h4>
        <div className="mb-3"></div>
        {leftControl &&
          leftControl?.map((item, ind) => {
            return (
              <SelectControl
                key={ind}
                imgTitle={banner_Left}
                title={item?.name}
                AddsPrice={`Adds $${item?.price}`}
                linePrice={`$${item?.offPrice}`}
                titlePre={item?.description}
                isActive={activeIndex === ind}
                onClick={() => {
                  handleImageClick(ind), setSlctControl(item);
                }}
              />
            );
          })}
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Choose your tilt</h4>
        <div className="mb-3"></div>
        {activeIndex === 0 && (
          <>
            <CustomizePage
              imgTitle={banner_Left}
              title="Wand"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
              of the window, closer to the glass, for better privacy
              and light blockage."
              isSectionActive={activeTitle === 0}
              onClick={() => {
                handleImage(0), setSlctTilt("Wand");
              }}
            />
            <CustomizePage
              imgTitle={banner_Left}
              title="Cord"
              className="d-none"
              titlePre="With a reverse roll, the fabric hangs toward the room,
           away from the glass. Not available with a valance."
              isSectionActive={activeTitle === 1}
              onClick={() => {
                handleImage(1), setSlctTilt("Cord");
              }}
            />
          </>
        )}
        {activeIndex === 1 && (
          <>
            <CustomizePage
              imgTitle={banner_Left}
              title="Wand"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
              isSectionActive={activeTitle === 0}
              onClick={() => {
                handleImage(0), setSlctTilt("Wand");
              }}
            />
          </>
        )}

        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
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
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Block Light / Add Privacy</h4>
        <div className="mb-3"></div>
        {activeIndex === 0 && (
          <>
            <CustomizePage
              imgTitle={banner_Left}
              title="Standard"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
              isSectionActive={activeBlockLight === 0}
              onClick={() => {
                setActiveBlockLight(0);
                setSlcBlockLight("Standard");
              }}
            />
            <CustomizePage
              imgTitle={banner_Left}
              title="Privacy Slats"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
              isSectionActive={activeBlockLight === 1}
              onClick={() => {
                setActiveBlockLight(1);
                setSlcBlockLight("Privacy Slats");
              }}
            />
            <CustomizePage
              imgTitle={banner_Left}
              title="Cloth Tapes"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
              isSectionActive={activeBlockLight === 2}
              onClick={() => {
                setActiveBlockLight(2);
                setSlcBlockLight("Cloth Tapes");
              }}
            />
          </>
        )}
        {activeTitle === 5 && (
          <>
            <div className="mb-3"></div>
            <h4 className="fw-semibold">Pick Cloth Tape Color</h4>
            {productClothTapeData &&
              productClothTapeData?.map((item, ind) => {
                return (
                  <div key={ind}>
                    <h6 className="fw-semibold">{item?.name}</h6>
                    <div className="mb-3"></div>
                    <div className="common-img">
                      {item?.colors &&
                        item?.colors?.map((clr, index) => {
                          return (
                            <RoundedColor
                              key={index}
                              imgColor={clr?.image}
                              imgsrc={clr?.image}
                              isActive={activeRounded === clr?.name}
                              onClick={() => {
                                handleImageRounded(clr?.name);
                              }}
                            />
                          );
                        })}
                    </div>
                    <div className="mb-3"></div>
                  </div>
                );
              })}
          </>
        )}
        {activeIndex === 1 && (
          <>
            <CustomizePage
              imgTitle={banner_Left}
              title="Stand"
              className="d-none"
              titlePre="With a standard roll, the fabric hangs toward the back
            of the window, closer to the glass, for better privacy
            and light blockage."
              isSectionActive={activeTitle === 6}
              onClick={() => handleImage(6)}
            />
          </>
        )}
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Choose your headrail style</h4>
        <div className="mb-3"></div>
        {activeIndex === 0 && (
          <>
            <div className="main_class_color">
              <CardCommon
                imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                colorcode="Standard"
                adPrice=""
                bottomPrice=""
                classHover="d-none"
                isActive={activeChoose === 0}
                onClick={() => {
                  handleImageChoose(0);
                  getHeadrails({
                    type: "standard",
                    name: "Standard",
                    price: 0,
                  });
                }}
              />
              <CardCommon
                imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                colorcode="2 to 1"
                adPrice="Adds $16.14"
                bottomPrice="$23.06"
                classHover="d-none"
                isActive={activeChoose === 1}
                onClick={() => {
                  handleImageChoose(1);
                  getHeadrails({
                    type: "2to1",
                    name: "2 to 1",
                    price: 23.06,
                  });
                }}
              />
            </div>
          </>
        )}
        {activeIndex === 1 && (
          <>
            <div className="main_class_color">
              <CardCommon
                imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                colorcode="Standard"
                adPrice=""
                bottomPrice=""
                classHover="d-none"
                isActive={activeChoose === 0}
                onClick={() => {
                  handleImageChoose(0);
                  getHeadrails({
                    type: "standard",
                    name: "Standard",
                    price: 0,
                  });
                }}
              />
              <CardCommon
                imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                colorcode="2 to 1"
                adPrice="Adds $12.14"
                bottomPrice="$23.06"
                classHover="d-none"
                isActive={activeChoose === 1}
                onClick={() => {
                  handleImageChoose(1);
                  getHeadrails({
                    type: "2to1",
                    name: "2 to 1",
                    price: 12.14,
                  });
                }}
              />
              <CardCommon
                imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                colorcode="3 to 1"
                adPrice="Adds $12.14"
                bottomPrice="$24.06"
                classHover="d-none"
                isActive={activeChoose === 2}
                onClick={() => {
                  handleImageChoose(2);
                  getHeadrails({
                    type: "3to1",
                    name: "3 to 1",
                    price: 12.16,
                  });
                }}
              />
            </div>
          </>
        )}
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        {activeChoose === 0 && (
          <>
            <h4 className="fw-semibold">Choose your controls</h4>
            <div className="mb-3"></div>
            <div>
              <h5 className="fw-semibold">Control Position</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
                onChange={(i) => setHeadrailStyle(i?.target?.value)}
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
          </>
        )}

        {activeChoose === 1 && (
          <>
            <div>
              <h5 className="fw-semibold">Left Blind</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
            <div>
              <h5 className="fw-semibold">Right Blind</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
            <div>
              <h5 className="fw-semibold">Left Blind Width</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                    <option value="0.5">1/2</option>
                    <option value="0.625">5/8</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="fw-semibold">Right Blind Width</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                    <option value="0.5">1/2</option>
                    <option value="0.625">5/8</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        )}
        {activeChoose === 2 && (
          <>
            <div>
              <h5 className="fw-semibold">Left Blind Lift Control</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
            <div>
              <h5 className="fw-semibold">Middle Blind Lift Control</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
            <div>
              <h5 className="fw-semibold">Right Blind Lift Control</h5>
              <img
                src="https://www.blinds.com/product-images/d1868f0f-dcff-e911-9476-0a986990730e.jpg"
                alt="product-images"
              />
              <div className="mb-3"></div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue=""
              >
                <option defaultValue="">Select</option>
                <option value="Left Tilt / Cordless Lift">
                  Left Tilt / Cordless Lift
                </option>
                <option value="Tilt Right / Cordless Lift">
                  Tilt Right / Cordless Lift
                </option>
              </select>
            </div>
            <div>
              <h5 className="fw-semibold">Left Blind Width</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                    <option value="0.5">1/2</option>
                    <option value="0.625">5/8</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="fw-semibold">Middle Blind Width</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                    <option value="0.5">1/2</option>
                    <option value="0.625">5/8</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="fw-semibold">Right Blind Width</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    defaultValue=""
                  >
                    <option value="0">0/0</option>
                    <option value="0.125">1/8</option>
                    <option value="0.25">1/4</option>
                    <option value="0.375">3/8</option>
                    <option value="0.5">1/2</option>
                    <option value="0.625">5/8</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
      </div>
    </section>
  );
};
export default Controls;
