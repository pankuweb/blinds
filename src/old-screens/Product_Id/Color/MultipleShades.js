import { useState } from "react";
import CardCommon from "./CardCommon";

const MultipleShades = ({ multiShades }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section>
      <div className="multiple_shades_section">
        <h4 className="fw-semibold">
          Do you want multiple shades installed side by side?
        </h4>
        <div className="mb-3"></div>
        <div className="main_class_color">
          {multiShades &&
            multiShades?.map((item, ind) => {
              return (
                <CardCommon
                  imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
                  colorcode="Charlotte Iron 6100"
                  adPrice=""
                  bottomPrice=""
                  isActive={activeIndex === ind}
                  onClick={() => handleImageClick(ind)}
                  classHover="d-none"
                />
              );
            })}
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="Charlotte Iron 6100"
            adPrice=""
            bottomPrice=""
            isActive={activeIndex === 0}
            onClick={() => handleImageClick(0)}
            classHover="d-none"
          />
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="Charlotte Iron 6100"
            adPrice="Adds $16.14"
            bottomPrice="$23.06"
            isActive={activeIndex === 1}
            onClick={() => handleImageClick(1)}
            classHover="d-none"
          />
        </div>
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Select Valance</h4>
        <div className="mb-3"></div>
        <div className="main_class_color">
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="Charlotte Iron 6100"
            adPrice=""
            bottomPrice=""
            isActive={activeIndex === 2}
            onClick={() => handleImageClick(2)}
            classHover="d-none"
          />
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="Semi Open 3 Cassette with Fabric Insert"
            adPrice="Adds $16.14"
            bottomPrice="$23.06"
            isActive={activeIndex === 3}
            onClick={() => handleImageClick(3)}
            classHover="d-none"
          />
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="3 Fascia"
            adPrice="Adds $16.14"
            bottomPrice="$23.06"
            isActive={activeIndex === 4}
            onClick={() => handleImageClick(4)}
            classHover="d-none"
          />
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="5 Fascia"
            adPrice="Adds $16.14"
            bottomPrice="$23.06"
            isActive={activeIndex === 5}
            onClick={() => handleImageClick(5)}
            classHover="d-none"
          />
          <CardCommon
            imgsrc="https://www.blinds.com/product-images/e1713f29-9fbe-e311-a64d-84df7b46b4ac.jpg"
            colorcode="Fabric Wrapped 4 Cornice"
            adPrice="Adds $60.28"
            bottomPrice="$60.28"
            isActive={activeIndex === 6}
            onClick={() => handleImageClick(6)}
            classHover="d-none"
          />
        </div>
      </div>
      <div className="mb-3"></div>
      <div className="border-bottom"></div>
      <div className="mb-3"></div>
    </section>
  );
};

export default MultipleShades;
