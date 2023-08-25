import { useEffect, useState } from "react";
import SelectControl from "@/src/old-screens/Product_Copy/Color/SelectControl";
import banner_Left from "@/assets/images/banner-image.webp";
import SelectControlBox from "./Components/SelectControlBox";
import { constrols, titlBlockLight, extendedControlPole } from "./data";

const Controllers = () => {
  const initialIndice = constrols && constrols[0]?.id;
  const [activeIndex, setActiveIndex] = useState(initialIndice);
  const [activeCntrlFirtsTime, setActiveCntrlFirtsTime] = useState(true);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const initialTiltIndice =
    constrols && constrols[0]?.child_controls?.[0]?.tilt_obj?.[0]?.id;
  const [activeTitleIndex, setActiveTitleIndex] = useState(initialTiltIndice);
  const [titlControls, setTiltControls] = useState([]);
  const handleGetTiltControls = (catId) => {
    let childControls = constrols && constrols?.[catId]?.child_controls;
    setTiltControls(childControls);
  };

  const [blockLightControls, setBlockLightControls] = useState();
  const [blocklighFirtsTime, blocklightFirtsTime] = useState(true);
  const [activeBlocklightIndex, setActiveBlocklightIndex] = useState("");

  const handleGetBlockLights = (blockId) => {
    const childBlocklight =
      titlBlockLight &&
      titlBlockLight?.filter((item) => {
        if (item?.id === blockId) return item;
      });
    setBlockLightControls(childBlocklight);
  };

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
                    handleGetTiltControls(index, item);
                  }}
                />
              </div>
            );
          })}
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        {titlControls &&
          titlControls?.map((item, tiltIndex) => {
            console.log(item?.extended_pool_obj, "item===>");
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
                            handleGetBlockLights(tilt?.block_light_id);
                          }}
                        />
                      </div>
                    );
                  })}
                <div className="mb-3"></div>
                <h4 className="fw-semibold">asdfasdfasf</h4>
                <div className="mb-3"></div>
                {item?.extended_pool_obj &&
                  item?.extended_pool_obj?.map((val) => {
                    return (
                      <SelectControlBox
                        key={val?.name}
                        cardImage={val?.image}
                        boxTitle={val?.title}
                        price={val?.price}
                        offPrice={val?.offPrice}
                        description={val?.description}
                        // isActive={activeBlocklightIndex === blockLight?.id}
                        // onClick={() => {
                        //   setActiveBlocklightIndex(blockLight?.id);
                        // }}
                      />
                    );
                  })}
                <div
                  className="hard-hr"
                  style={{ height: "4px", width: "100%", background: "#ddd" }}
                ></div>
              </div>
            );
          })}
        {/*  */}
        <div className="mb-3"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">asdfasdfasf</h4>
        <div className="mb-3"></div>
        {/*  */}
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
                        }}
                      />
                    );
                  })}
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default Controllers;
