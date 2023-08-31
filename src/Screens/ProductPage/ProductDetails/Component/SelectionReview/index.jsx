import React, { useEffect, useState } from "react";
import Link from "next/link";

const SelectionReview = ({ controlsDetails }) => {
  const [productPrice, setProductPrice] = useState(null);
  const [selectionDetails, setSelectionDetails] = useState(null);
  const handleSetDetails = (data) => {
    setSelectionDetails(data);
  };

  const mangePriceSelectedPrice = (seletedValues) => {
    let productPrice = 0;
    if (!seletedValues) return;
    if (seletedValues) {
      if (seletedValues?.colors?.color_price) {
        productPrice += Number(seletedValues?.colors?.color_price);
      }
      if (seletedValues?.controls?.lift_controls?.price) {
        productPrice += Number(seletedValues?.controls?.lift_controls?.price);
      }
      if (seletedValues?.controls?.titl_controls?.price) {
        productPrice += Number(seletedValues?.controls?.titl_controls?.price);
      }
      if (seletedValues?.controls?.ended_controls?.price) {
        productPrice += Number(seletedValues?.controls?.ended_controls?.price);
      }
      if (seletedValues?.controls?.block_light_controls?.price) {
        productPrice += Number(
          seletedValues?.controls?.block_light_controls?.price
        );
      }
      if (seletedValues?.controls?.headrail_controls?.price) {
        productPrice += Number(
          seletedValues?.controls?.headrail_controls?.price
        );
      }
      if (seletedValues?.controls?.left_blind?.price) {
        productPrice += Number(seletedValues?.controls?.left_blind?.price);
      }
      if (seletedValues?.controls?.right_blind?.price) {
        productPrice += Number(seletedValues?.controls?.right_blind?.price);
      }
      if (seletedValues?.controls?.valance_controls?.price) {
        productPrice += Number(
          seletedValues?.controls?.valance_controls?.price
        );
      }
    }
    return productPrice;
  };

  useEffect(() => {
    if (!controlsDetails) return;
    handleSetDetails(controlsDetails);
    setProductPrice(mangePriceSelectedPrice(controlsDetails));
  }, [controlsDetails]);

  const { sizes, colors, controls } = selectionDetails ? selectionDetails : "";

  return (
    <div className="select_bottom_section">
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
              <td>{sizes ? sizes?.blind_width_inches?.width : ""}</td>
              <td>{sizes ? sizes?.blind_width_eighths?.width : ""}</td>
            </tr>
            <tr>
              <td className="fw-semibold">Height:</td>
              <td>{sizes ? sizes?.blind_height_inches?.height : ""}</td>
              <td>{sizes ? sizes?.blind_height_eighths?.height : ""}</td>
            </tr>
            <tr>
              <td className="fw-semibold">Color:</td>
              <td>{colors ? colors?.color_name : ""}</td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-semibold"> Lift Control:</td>
              <td>{controls ? controls?.lift_controls?.name : ""}</td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-semibold">New Tilt:</td>
              <td>
                {controls?.titl_controls ? controls?.titl_controls?.name : ""}
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-semibold">Controle Pole:</td>
              <td>
                {controls?.ended_controls ? controls?.ended_controls?.name : ""}
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-semibold">Headrail:</td>
              <td>
                {controls?.headrail_controls
                  ? controls?.headrail_controls?.name
                  : ""}
              </td>
              <td></td>
            </tr>
            {controls?.left_blind && (
              <tr>
                <td className="fw-semibold">Left Blind:</td>
                <td>
                  {controls?.left_blind ? controls?.left_blind?.postion : ""}
                </td>
                <td></td>
              </tr>
            )}
            {controls?.right_blind && (
              <tr>
                <td className="fw-semibold">Right Blind:</td>
                <td>
                  {controls?.right_blind ? controls?.right_blind?.postion : ""}
                </td>
                <td></td>
              </tr>
            )}
            {controls?.left_blind_width_inches && (
              <tr>
                <td className="fw-semibold">Left Blind Width:</td>
                <td>
                  {controls?.left_blind_width_inches
                    ? controls?.left_blind_width_inches?.width
                    : ""}
                </td>
                <td>
                  {controls?.left_blind_width_eighths
                    ? controls?.left_blind_width_eighths?.width
                    : ""}
                </td>
              </tr>
            )}
            {controls?.right_blind_width_inches && (
              <tr>
                <td className="fw-semibold">Right Blind Width:</td>
                <td>
                  {controls?.right_blind_width_inches
                    ? controls?.right_blind_width_inches?.width
                    : ""}
                </td>
                <td>
                  {controls?.right_blind_width_eighths
                    ? controls?.right_blind_width_eighths?.width
                    : ""}
                </td>
              </tr>
            )}
            <tr>
              <td className="fw-semibold">Valance:</td>
              <td>
                {controls?.valance_controls
                  ? controls?.valance_controls?.name
                  : ""}
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="fw-semibold">Shipping:</td>
              <td>
                {controls?.shipping_method
                  ? controls?.shipping_method?.name
                  : ""}
              </td>
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
            <input type="number" name="number" id="number" autoComplete="off" />
          </div>

          <div className="text-end">
            <small>
              <span className="text-decoration-line-through" lang="es">
                $23.06
              </span>
              <span className="text-uppercase" lang="es">
                Save 30%
              </span>
            </small>
            <p>{`$${productPrice?.toFixed(2)}`}</p>
          </div>
        </div>
        <div className="mb-3"></div>
        <div className="add-select-cart-section">
          <Link href="#" className="add-cart-button">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectionReview;
