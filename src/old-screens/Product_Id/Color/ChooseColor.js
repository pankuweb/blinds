import { useState, useEffect } from "react";
import RoundedColor from "./RoundedColor";
import CardCommon from "./CardCommon";

const ChooseColor = ({ color, getChoosedColor }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slctColor, setSlctColor] = useState();
  const [title, setTitle] = useState("");
  const colorData = color?.product ? color?.product?.color : "";
  useEffect(() => {
    if (colorData && colorData[0]?.colors[0]?.name) {
      setActiveIndex(colorData[0]?.colors[0]?.name);
      setSlctColor(colorData[0]?.colors[0]?.name);
      setTitle(colorData[0]?.colors[0]?.name);
    }
  }, [colorData]);

  const handleSelectColor = (clr) => {
    setActiveIndex(clr);
    return setSlctColor(clr);
  };

  useEffect(() => {
    getChoosedColor(slctColor);
  }, [slctColor]);

  return (
    <section>
      <div className="choose_color_section">
        <h4 className="fw-semibold">Select Color</h4>
        {/*  */}
        {colorData &&
          colorData?.map((item, ind) => {
            return (
              <div key={ind}>
                <div className="mb-3"></div>
                <h5 className="fw-semibold">{item?.name}</h5>
                <div className="mb-3"></div>
                <div className="attention-color-section">
                  {ind === 0 && (
                    <div className="d-flex gap-1">
                      <h6 className="text-secondary">COLOR :</h6>
                      <h6>{title}</h6>
                    </div>
                  )}
                  <div className="mb-3"></div>
                  <div className="common-img">
                    {item?.colors &&
                      item?.colors?.map((clr, index) => {
                        return (
                          <RoundedColor
                            key={index}
                            imgColor={clr?.image}
                            imgsrc={clr?.image}
                            isActive={activeIndex === clr?.name}
                            onClick={() => {
                              handleSelectColor(clr?.name);
                              setTitle(clr?.name);
                            }}
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="mb-3"></div>
              </div>
            );
          })}

        {/*  */}
        {/* <div className="mb-3"></div>
        <h5 className="fw-semibold">Blackout Colors with White Backing</h5>
        <div className="mb-3"></div>
        <div className="attention-color-section">
          <div className="d-flex gap-1">
            <h6 className="text-secondary">COLOR :</h6>
            <h6>{title}</h6>
          </div>
          <div className="mb-3"></div>
          <div className="common-img">
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 0}
              onClick={() => {
                handleImageClick(0);
                setTitle("BLACK");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 1}
              onClick={() => {
                handleImageClick(1);
                setTitle("MINT");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 2}
              onClick={() => {
                handleImageClick(2), setTitle("LAVENDER");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 3}
              onClick={() => {
                handleImageClick(3), setTitle("ROYAL BLUE");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 4}
              onClick={() => {
                handleImageClick(4), setTitle("WHITE");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 5}
              onClick={() => {
                handleImageClick(5), setTitle("LISA FRANK RAINBOW LEOPARD");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 6}
              onClick={() => {
                handleImageClick(6), setTitle("GALAXY METALLIC");
              }}
            />
          </div>
          <div className="mb-3"></div>
          <div className="common-img">
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 7}
              onClick={() => {
                handleImageClick(7);
                setTitle("MINT");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 8}
              onClick={() => {
                handleImageClick(8);
                setTitle("Charlotte Cream 5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 9}
              onClick={() => {
                handleImageClick(9);
                setTitle("Charlotte Cream 5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 10}
              onClick={() => {
                handleImageClick(10);
                setTitle("Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 11}
              onClick={() => {
                handleImageClick(11);
                setTitle("MINT");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 12}
              onClick={() => {
                handleImageClick(12);
                setTitle("Charlotte Cream 5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 13}
              onClick={() => {
                handleImageClick(13);
                setTitle("Charlotte Cream 5300");
              }}
            />
          </div>
          <div className="mb-3"></div>
          <div className="common-img">
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 14}
              onClick={() => {
                handleImageClick(14);
                setTitle("MINT");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 15}
              onClick={() => {
                handleImageClick(15);
                setTitle("Charlotte Cream 5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 16}
              onClick={() => {
                handleImageClick(16);
                setTitle("Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 17}
              onClick={() => {
                handleImageClick(17);
                setTitle(" Cream 5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 18}
              onClick={() => {
                handleImageClick(18);
                setTitle("  5300");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 19}
              onClick={() => {
                handleImageClick(19);
                setTitle("MINT");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 20}
              onClick={() => {
                handleImageClick(20);
                setTitle("Oxford Porcelain 5100");
              }}
            />
          </div>
          <div className="mb-3"></div>
          <div className="common-img">
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 21}
              onClick={() => {
                handleImageClick(21);
                setTitle("Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 22}
              onClick={() => {
                handleImageClick(22);
                setTitle("Oxford Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 23}
              onClick={() => {
                handleImageClick(23);
                setTitle("Oxford Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 24}
              onClick={() => {
                handleImageClick(24);
                setTitle("Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 25}
              onClick={() => {
                handleImageClick(25);
                setTitle("Oxford Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 26}
              onClick={() => {
                handleImageClick(26);
                setTitle("Porcelain 5100");
              }}
            />
            <RoundedColor
              imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
              isActive={activeIndex === 27}
              onClick={() => {
                handleImageClick(27);
                setTitle("Oxford Porcelain 5100");
              }}
            />
          </div>
          <div className="mb-3"></div>
        </div>
        <div className="mb-3"></div>
        <h5 className="fw-semibold">Blackout Colors with Same Color Backing</h5>
        <div className="mb-3"></div>
        <div className="common-img">
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 28}
            onClick={() => {
              handleImageClick(28);
              setTitle("Oxford Flax 5200");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 29}
            onClick={() => {
              handleImageClick(29);
              setTitle("BLACK");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 30}
            onClick={() => {
              handleImageClick(30);
              setTitle("Charlotte Iron 6100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 31}
            onClick={() => {
              handleImageClick(31);
              setTitle("Oxford Flax 5200");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 32}
            onClick={() => {
              handleImageClick(32);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 33}
            onClick={() => {
              handleImageClick(33);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 34}
            onClick={() => {
              handleImageClick(34);
              setTitle("Oxford Flax 5200");
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="common-img">
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 35}
            onClick={() => {
              handleImageClick(35);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 36}
            onClick={() => {
              handleImageClick(36);
              setTitle("Charlotte Iron 6100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 37}
            onClick={() => {
              handleImageClick(37);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 38}
            onClick={() => {
              handleImageClick(38);
              setTitle("Oxford Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 39}
            onClick={() => {
              handleImageClick(39);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/5797f589-c74a-e711-9468-0a986990730e.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 40}
            onClick={() => {
              handleImageClick(40);
              setTitle("Oxford Flax 5200");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 41}
            onClick={() => {
              handleImageClick(41);
              setTitle("Oxford Porcelain 5100");
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="common-img">
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 42}
            onClick={() => {
              handleImageClick(42);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 43}
            onClick={() => {
              handleImageClick(43);
              setTitle("Oxford Flax 5200");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 44}
            onClick={() => {
              handleImageClick(44);
              setTitle("Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 45}
            onClick={() => {
              handleImageClick(45);
              setTitle("Oxford Flax 5200");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 46}
            onClick={() => {
              handleImageClick(46);
              setTitle("Oxford Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 47}
            onClick={() => {
              handleImageClick(47);
              setTitle("Oxford Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 48}
            onClick={() => {
              handleImageClick(48);
              setTitle("Charlotte Iron 6100");
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="common-img">
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 49}
            onClick={() => {
              handleImageClick(49);
              setTitle("BLACK");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 50}
            onClick={() => {
              handleImageClick(50);
              setTitle("Charlotte Iron 6100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 51}
            onClick={() => {
              handleImageClick(51);
              setTitle("BLACK");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 52}
            onClick={() => {
              handleImageClick(52);
              setTitle("Charlotte Iron 6100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/1032f407-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 53}
            onClick={() => {
              handleImageClick(53);
              setTitle("Oxford Porcelain 5100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/42d60dea-10ae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 54}
            onClick={() => {
              handleImageClick(54);
              setTitle("Charlotte Iron 6100");
            }}
          />
          <RoundedColor
            imgColor="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            imgsrc="https://www.blinds.com/product-images/e69f12ad-0fae-e311-bbbc-ff5704ec6dac.jpg?height=130&width=130&mode=crop"
            isActive={activeIndex === 55}
            onClick={() => {
              handleImageClick(55);
              setTitle("Oxford Porcelain 5100");
            }}
          />
        </div>
        <div className="mb-3"></div> */}
      </div>
    </section>
  );
};

export default ChooseColor;
