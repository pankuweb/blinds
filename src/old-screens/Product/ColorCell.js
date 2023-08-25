import blueTik from "@/assets/images/blue-tik-icons.webp";
import CardCommon from "./CardCommon";
import { useState } from "react";
const ColorCell = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section>
      <div className="available_right_section">
        <h3 className="fw-semibold mb-3">Color</h3>
        <h5 className="fw-normal mb-3 mt-3">3/8" Single Cell</h5>
        <div className="available_grid-column">
          <div className="col position-relative">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="$103.99"
              pre="Marble SCC26666"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 0}
              onClick={() => handleImageClick(0)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/040d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="$63.99"
              pre="Marble SCC2002"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 1}
              onClick={() => handleImageClick(1)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/ab0b3849-46e2-e611-9468-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="$123.99"
              pre="Bay Fog SCC7116"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 2}
              onClick={() => handleImageClick(2)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/030d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="$123.99"
              pre="Butterscotch SCC2505"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 3}
              onClick={() => handleImageClick(3)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/aad3f5f6-105f-eb11-9487-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price=" $103.99"
              pre="Wintergreen SCC2703"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 4}
              onClick={() => handleImageClick(4)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/0e0d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price=" $103.99"
              pre="Pea Green SCC2604"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 5}
              onClick={() => handleImageClick(5)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/050d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price=" $103.99"
              pre="Palm SCC2508"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 6}
              onClick={() => handleImageClick(6)}
            />
          </div>
        </div>
        <div className="available_grid-column">
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Rainier Snowfall 6250zoom_in"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 7}
              onClick={() => handleImageClick(7)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/040d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Marble SCC2002"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 8}
              onClick={() => handleImageClick(8)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/ab0b3849-46e2-e611-9468-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Bay Fog SCC7116"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 9}
              onClick={() => handleImageClick(9)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/030d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Butterscotch SCC2505"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 10}
              onClick={() => handleImageClick(10)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/aad3f5f6-105f-eb11-9487-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Wintergreen SCC2703"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 11}
              onClick={() => handleImageClick(11)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/0e0d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Pea Green SCC2604"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 12}
              onClick={() => handleImageClick(12)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/050d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Palm SCC2508"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 13}
              onClick={() => handleImageClick(13)}
            />
          </div>
        </div>
        <div className="available_grid-column">
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/089d979b-7ceb-ea11-9482-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Rainier Snowfall 6250zoom_in"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 14}
              onClick={() => handleImageClick(14)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/040d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Marble SCC2002"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 15}
              onClick={() => handleImageClick(15)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/ab0b3849-46e2-e611-9468-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Bay Fog SCC7116"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 16}
              onClick={() => handleImageClick(16)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/030d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Butterscotch SCC2505"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 17}
              onClick={() => handleImageClick(17)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/aad3f5f6-105f-eb11-9487-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Wintergreen SCC2703"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 18}
              onClick={() => handleImageClick(18)}
            />
          </div>
          <div className="col">
            <CardCommon
              imgsec="https://www.blinds.com/product-images/0e0d0918-e899-ea11-947e-0a986990730e.jpg?width=130&height=130&mode=crop&scale=both"
              price="   $103.99"
              pre="Pea Green SCC2604"
              imgblue={blueTik.src}
              className=""
              isActive={activeIndex === 19}
              onClick={() => handleImageClick(19)}
            />
          </div>
        </div>
        <div className="product-more_rows text-center">
          <button>More Rows of Colors</button>
        </div>
      </div>
    </section>
  );
};
export default ColorCell;
