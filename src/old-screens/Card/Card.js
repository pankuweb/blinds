import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
import shopping from "@/assets/images/shopping-cart.webp";
import Link from "next/link";
import UnoptimizedImage from "@/UnoptimizedImage";

const Card = () => {
  return (
    <section>
      <Layout>
        <BannerCommon
          title="Shopping Cart"
          offers="CART"
          className=""
          btnSave=""
          paragraph=""
          classbg="bg_by_class"
        />
        <div className="main_table_cart">
          <div className="container">
            <div className="overflow-x-auto main_shopping_cart mb-5">
              <table className="w-100">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center border-bottom">
                    <td className="d-flex justify-content-center align-items-center gap-5">
                      <UnoptimizedImage
                        src={shopping}
                        alt="shopping"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <h5 className="fw-semibold m-0 lh-base">
                        Light Filtering Cellular Shades <br />
                        <small className="fw-medium">
                          COLOR NAMEEGGSHELL LD2002
                        </small>
                      </h5>
                    </td>
                    <td className="shopping-payment">$23.00</td>
                    <td>
                      <input
                        type="number"
                        className="incr_decr"
                        autoComplete="off"
                        value={1}
                      />
                    </td>
                    <td className="shopping-payment">$28.00</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="apply-coupon">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="offset-md-2"
                        name="Coupon"
                        id="Coupon"
                        autoComplete="off"
                      />
                      <button>Apply coupon</button>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="apply-update text-center">
                      <button>Update cart</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart_totals mb-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                  <h3 className="fw-semibold mb-4">Cart totals</h3>
                  <table className="w-100 table-bordered mb-5">
                    <thead>
                      <tr>
                        <th>Subtotal</th>
                        <td>$23.00</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Shipping</th>
                        <td>
                          <h6>Flat rate</h6>
                          <h6>Shipping to CA.</h6>
                          <h6>Change address</h6>
                        </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>$23.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link href="checkout">Proceed to checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Card;
