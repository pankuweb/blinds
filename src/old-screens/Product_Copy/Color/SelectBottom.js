import { useState } from "react";
import carSelect from "@/assets/images/car-color.webp";
import Link from "next/link";
import CardCommon from "./CardCommon";

const SelectBottom = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section>
      <div className="select_bottom_section">
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Light Blocker</h4>
        <p>
          A light blocker in an L shaped piece of plastic that helps cover light
          gaps from the sides of your shade.
        </p>
        <div className="mb-3"></div>
        <div className="main_class_color">
          <div className="carselect_img">
            <CardCommon
              imgsrc={carSelect.src}
              colorcode="Standard"
              isActive={activeIndex === 3}
              onClick={() => handleImageClick(3)}
              classHover="d-none"
            />
          </div>
        </div>
        <div className="mb-3"></div>
        <div className="border-bottom"></div>
        <div className="mb-3"></div>
        <h4 className="fw-semibold">Have a look on your selections</h4>
        <div className="mb-3"></div>
        <div className="checkout-selections-section">
          <table className="w-100" id="customers">
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="fw-semibold">SureFit – Guaranteed to Fit:</td>
                <td>yes</td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Window Name:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Mount:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Width:</td>
                <td>24 0/0</td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Height:</td>
                <td>36 0/0</td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Color:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold"> Lift:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Fabric Roll Direction:</td>
                <td>Standard (from back of roll)</td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Headrail:</td>
                <td>Single</td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Valance:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Bottom Rail:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Width Size:</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="fw-semibold">Shipping:</td>
                <td>Standard</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="mb-3"></div>
          <div className="d-flex justify-content-between fw-semibold">
            <div>Shipping</div>
            <div>Quantity</div>
            <div>Total Price</div>
          </div>
          <div className="mb-3"></div>
          <div className="d-flex justify-content-between">
            <div className="fw-semibold">Free*</div>
            <div>
              <input
                type="number"
                name="number"
                id="number"
                autoComplete="off"
              />
            </div>
            <small>
              <span className="text-decoration-line-through" lang="es">
                $23.06
              </span>
              <span className="text-uppercase" lang="es">
                Save 30%
              </span>
            </small>
          </div>
          <div className="mb-3"></div>
          <div className="add-select-cart-section">
            <Link href="#" className="add-cart-button">
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SelectBottom;
