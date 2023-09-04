import { useEffect, useState } from "react";
import SelectControl from "@/src/old-screens/Product_Copy/Color/SelectControl";
import banner_Left from "@/assets/images/banner-image.webp";
import SelectControlBox from "./Components/SelectControlBox";
import SelectControlCard from "./Components/SelectControlCard";
import {
  constrols,
  titlBlockLight,
  headrailStyle,
  valanceControls,
  extrasControls,
  shippingMethods,
} from "./data";

const Controllers = ({ productData, getAllControlDetails }) => {
  const initialIndice = constrols && constrols[0]?.id;
  const [activeIndex, setActiveIndex] = useState(initialIndice);
  const [activeCntrlFirtsTime, setActiveCntrlFirtsTime] = useState(true);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  const [controlSelection, setControlSelection] = useState({});

  useEffect(() => {
    getAllControlDetails(controlSelection);
  }, [controlSelection]);

  const handleControlSelectionUpdate = (processName, newData) => {
    setControlSelection((prevData) => ({
      ...prevData,
      [processName]: newData,
    }));
  };

  const initialTiltIndice =
    constrols &&
    constrols?.[0]?.child_controls[0]?.tiltes?.[0]?.tilt_obj?.[0]?.id;
  const [activeTitleIndex, setActiveTitleIndex] = useState(initialTiltIndice);
  const [titlControls, setTiltControls] = useState([]);
  const handleGetTiltControls = (catId, data) => {
    let childControls = constrols && constrols?.[catId]?.child_controls;
    setTiltControls(childControls);
  };
  const [activeExtended, setActiveExtended] = useState(1);
  const [blockLightControls, setBlockLightControls] = useState();
  const [blocklighFirtsTime, blocklightFirtsTime] = useState(true);
  const [activeBlocklightIndex, setActiveBlocklightIndex] = useState("");
  const handleGetBlockLights = (blockId, endedId) => {
    const childBlocklight =
      titlBlockLight &&
      titlBlockLight?.filter((item) => {
        if (item?.id === blockId) return item;
      });
    setBlockLightControls(childBlocklight);
  };
  const initialIndiceHeadrail = headrailStyle && headrailStyle?.styles?.[0]?.id;
  const [activeHeadrail, setActiveHeadrail] = useState(initialIndiceHeadrail);
  const [headrailControls, setHeadrailControls] = useState();
  const handleGetHeadrailControls = (actInd) => {
    const headrailsChildControls =
      headrailStyle && headrailStyle?.styles?.[actInd]?.child_controls;
    setHeadrailControls(headrailsChildControls);
  };
  const initialIndiceValance = valanceControls
    ? valanceControls?.[0]?.valanceCard?.[0]?.id
    : "";
  const [activeValance, setActiveValance] = useState(initialIndiceValance);
  const [activeExtras, setActiveExtras] = useState(true);

  const initializeControls = async () => {
    const ActiveCntrlIndex =
      constrols && constrols?.map((item, index) => index);
    if (activeCntrlFirtsTime) {
      handleGetTiltControls(ActiveCntrlIndex?.[0]);
      setActiveCntrlFirtsTime(false);
    }
    const activeBlockIndex = titlBlockLight && titlBlockLight?.[0]?.id;
    if (blocklighFirtsTime) {
      handleGetBlockLights(activeBlockIndex);
      setActiveBlocklightIndex(activeBlockIndex);
      blocklightFirtsTime(false);
    }
  };

  useEffect(() => {
    initializeControls();
  }, []);

  return (
    <section>
      <div className="select_lift_control">
        <h4 className="fw-semibold">Select Lift Control</h4>
        <div className="mb-3"></div>
        {constrols &&
          constrols?.map((item, index) => {
            return (
              <div className="" key={index}>
                <SelectControlBox
                  cardImage={item?.image}
                  boxTitle={item?.title}
                  price={item?.price}
                  offPrice={item?.offPrice}
                  description={item?.description}
                  isActive={activeIndex === item?.id}
                  onClick={() => {
                    handleImageClick(item?.id);
                    handleGetTiltControls(index, {
                      name: item?.title,
                      price: item?.price,
                      off_pirce: item?.offPrice,
                    });
                    handleControlSelectionUpdate("lift_controls", {
                      name: item?.title,
                      price: item?.price,
                      off_pirce: item?.offPrice,
                    });
                  }}
                />
              </div>
            );
          })}
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        {titlControls?.map((tilts, tiltsIndex) => {
          return (
            <div key={tiltsIndex}>
              <div>
                {tilts?.tiltes &&
                  tilts?.tiltes?.map((item, tiltIndex) => {
                    return (
                      <div key={tiltIndex}>
                        <div className="mb-3"></div>
                        <h4 className="fw-semibold">{item?.title}</h4>
                        <div className="mb-3"></div>
                        {item?.tilt_obj &&
                          item?.tilt_obj?.map((tilt, blockIndex) => {
                            return (
                              <div>
                                <SelectControlBox
                                  key={blockIndex}
                                  cardImage={tilt?.image}
                                  boxTitle={tilt?.title}
                                  price={tilt?.price}
                                  offPrice={tilt?.offPrice}
                                  description={tilt?.description}
                                  isActive={activeTitleIndex === tilt?.id}
                                  onClick={() => {
                                    setActiveTitleIndex(tilt?.id);
                                    handleGetBlockLights(
                                      tilt?.block_light_id,
                                      tilt
                                    );
                                    handleControlSelectionUpdate(
                                      "titl_controls",
                                      {
                                        name: tilt?.title,
                                        price: tilt?.price,
                                        off_pirce: tilt?.offPrice,
                                      }
                                    );
                                  }}
                                />
                              </div>
                            );
                          })}
                        <div
                          className="hard-hr"
                          style={{
                            height: "4px",
                            width: "100%",
                            background: "#ddd",
                          }}
                        ></div>
                      </div>
                    );
                  })}
              </div>
              {tilts?.extended_contorl_pools && (
                <div>
                  {tilts?.extended_contorl_pools &&
                    tilts?.extended_contorl_pools?.map(
                      (endedItem, tiltIndex) => {
                        return (
                          <div key={tiltIndex}>
                            <div className="mb-3"></div>
                            <h4 className="fw-semibold">{endedItem?.title}</h4>
                            <div className="mb-3"></div>
                            {endedItem?.extended_pool_obj &&
                              endedItem?.extended_pool_obj?.map(
                                (poolItem, blockIndex) => {
                                  return (
                                    <div>
                                      <SelectControlBox
                                        key={blockIndex}
                                        cardImage={poolItem?.image}
                                        boxTitle={poolItem?.title}
                                        price={poolItem?.price}
                                        offPrice={poolItem?.offPrice}
                                        description={poolItem?.description}
                                        isActive={
                                          activeExtended === poolItem?.id
                                        }
                                        onClick={() => {
                                          setActiveExtended(poolItem?.id);
                                          handleControlSelectionUpdate(
                                            "ended_controls",
                                            {
                                              name: poolItem?.title,
                                              price: poolItem?.price,
                                              off_pirce: poolItem?.offPrice,
                                            }
                                          );
                                        }}
                                      />
                                    </div>
                                  );
                                }
                              )}
                            <div
                              className="hard-hr"
                              style={{
                                height: "4px",
                                width: "100%",
                                background: "#ddd",
                              }}
                            ></div>
                          </div>
                        );
                      }
                    )}
                </div>
              )}
            </div>
          );
        })}
        <div className="mb-3"></div>
        {blockLightControls &&
          blockLightControls?.map((item, blockIndex) => {
            return (
              <div key={blockIndex}>
                <div className="mb-3"></div>
                <h4 className="fw-semibold">{item?.label}</h4>
                <div className="mb-3"></div>
                {item?.block_light_obj &&
                  item?.block_light_obj?.map((blockLight, ind) => {
                    return (
                      <SelectControlBox
                        key={ind}
                        cardImage={blockLight?.image}
                        boxTitle={blockLight?.title}
                        price={blockLight?.price}
                        offPrice={blockLight?.offPrice}
                        description={blockLight?.description}
                        isActive={activeBlocklightIndex === blockLight?.id}
                        onClick={() => {
                          setActiveBlocklightIndex(blockLight?.id);
                          // handleGetBlockLights(tiltIndex, blockIndex);
                          handleControlSelectionUpdate("block_light_controls", {
                            name: blockLight?.title,
                            price: blockLight?.price,
                            off_pirce: blockLight?.offPrice,
                          });
                        }}
                      />
                    );
                  })}
              </div>
            );
          })}
        {/*  */}
        <div className="mb-3"></div>
        {headrailStyle && (
          <div>
            <div className="mb-3"></div>
            <h4 className="fw-semibold">{headrailStyle?.label}</h4>
            <div className="mb-3"></div>
            <div className="main_class_color">
              {headrailStyle &&
                headrailStyle?.styles?.map((item, hdrlIndex) => {
                  return (
                    <div>
                      <SelectControlCard
                        key={hdrlIndex}
                        image={item?.image}
                        cartTitle={item?.title}
                        price={item?.price}
                        offPrice={item?.offPrice}
                        isActive={activeHeadrail === item?.id}
                        onClick={() => {
                          handleGetHeadrailControls(hdrlIndex);
                          setActiveHeadrail(item?.id);
                          handleControlSelectionUpdate("headrail_controls", {
                            name: item?.title,
                            price: item?.price,
                            off_pirce: item?.offPrice,
                          });
                        }}
                      />
                    </div>
                  );
                })}
            </div>
            {headrailControls &&
              headrailControls?.map((item, headInd) => {
                return (
                  <div key={headInd}>
                    <div className="mb-3"></div>
                    <h4 className="fw-semibold">{item?.label}</h4>
                    <div className="mb-3"></div>
                    {item?.controls?.map((val) => {
                      return (
                        <div>
                          <h5 className="fw-semibold">{val?.title}</h5>
                          {val?.image && (
                            <img src={val?.image} alt="product-images" />
                          )}
                          <div className="mb-3"></div>
                          {val?.postion && (
                            <select
                              className="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                              onChange={(i) =>
                                handleControlSelectionUpdate(
                                  val?.title?.replace(/ /g, "_")?.toLowerCase(),
                                  {
                                    name: val?.title,
                                    postion: i.target.value,
                                  }
                                )
                              }
                              name={val?.title}
                            >
                              <option defaultValue="">Select</option>
                              <option value="Left Tilt / Cordless Lift">
                                Left Tilt / Cordless Lift
                              </option>
                              <option value="Tilt Right / Cordless Lift">
                                Tilt Right / Cordless Lift
                              </option>
                            </select>
                          )}
                          {val?.minWidth && val?.maxWidth && (
                            <div className="row">
                              <div className="col-12 col-md-6 col-lg-6">
                                <select
                                  className="form-select form-select-lg mb-3"
                                  aria-label=".form-select-lg example"
                                  onChange={(i) =>
                                    handleControlSelectionUpdate(
                                      (val?.title + " inches")
                                        ?.replace(/ /g, "_")
                                        ?.toLowerCase(),
                                      {
                                        name: val?.title,
                                        type: "inches",
                                        width: i.target.value,
                                      }
                                    )
                                  }
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
                                  onChange={(i) =>
                                    handleControlSelectionUpdate(
                                      (val?.title + " eighths")
                                        ?.replace(/ /g, "_")
                                        ?.toLowerCase(),
                                      {
                                        name: val?.title,
                                        type: "eighths",
                                        width: i.target.value,
                                      }
                                    )
                                  }
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
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        )}
        <div className="mb-3"></div>
        {valanceControls &&
          valanceControls?.map((item, valInd) => {
            return (
              <div key={valInd}>
                <div className="mb-3"></div>
                <h4 className="fw-semibold">{item?.label}</h4>
                <div className="mb-3"></div>
                <div className="main_class_color">
                  {item?.valanceCard?.map((valCard, valcardInd) => {
                    return (
                      <SelectControlCard
                        key={valcardInd}
                        image={valCard?.image}
                        cartTitle={valCard?.title}
                        price={valCard?.price}
                        offPrice={valCard?.offPrice}
                        isActive={activeValance === valCard?.id}
                        onClick={() => {
                          // handleGetHeadrailControls(hdrlIndex);
                          setActiveValance(valCard?.id);
                          handleControlSelectionUpdate("valance_controls", {
                            name: valCard?.title,
                            price: valCard?.price,
                            off_pirce: valCard?.offPrice,
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        <div className="mb-3"></div>

        {extrasControls &&
          extrasControls?.map((item, valInd) => {
            return (
              <div key={valInd}>
                <div className="mb-3"></div>
                <h4 className="fw-semibold">{item?.label}</h4>
                <div className="mb-3"></div>
                {item?.extrasCard?.map((extCard, extInd) => {
                  return (
                    <SelectControlBox
                      key={extInd}
                      cardImage={extCard?.image}
                      boxTitle={extCard?.title}
                      price={extCard?.price}
                      offPrice={extCard?.offPrice}
                      description={extCard?.description}
                      isActive={activeExtras === true}
                      onClick={() => {
                        setActiveExtras(activeExtras);
                        handleControlSelectionUpdate("extras_control", {
                          name: extCard?.title,
                          price: extCard?.price,
                          off_pirce: extCard?.offPrice,
                        });
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        <div className="mb-3"></div>
        {shippingMethods &&
          shippingMethods?.map((item, valInd) => {
            return (
              <div key={valInd}>
                <div className="mb-3"></div>
                <h4 className="fw-semibold">{item?.label}</h4>
                <div className="mb-3"></div>
                <div className="main_class_color">
                  {item?.shippingCard?.map((shpCard, shpInd) => {
                    return (
                      <SelectControlCard
                        key={shpInd}
                        image={shpCard?.image}
                        cartTitle={shpCard?.title}
                        price={shpCard?.price}
                        offPrice={shpCard?.offPrice}
                        description={shpCard?.description}
                        isActive={activeExtras === true}
                        onClick={() => {
                          setActiveExtras(activeExtras);
                          handleControlSelectionUpdate("shipping_method", {
                            name: shpCard?.title,
                            price: shpCard?.price,
                            off_pirce: shpCard?.offPrice,
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        <div className="mb-3"></div>
      </div>
    </section>
  );
};
export default Controllers;
