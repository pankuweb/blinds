import Layout from "@/src/components/Layout";
import BannerCommon from "@/src/components/BannerCommon";

const TrackOrder = () => {
  return (
    <section>
      <Layout>
        <div className="track_order-section position-relative">
          <BannerCommon
            title="Track your order"
            offers=""
            btnSave=""
            paragraph="Enter your email address and your order
                      number to review the status of your order."
            classbg="track_by_order"
            className=""
            classh1=""
            classh4="text-white fw-bolder mb-2 fs-1"
          />
          <div className="container">
            <div className="track_main_order">
              <div className="track_form_section">
                <form className="border rounded-2 p-5">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control focus-ring focus-ring-light"
                      id="exampleInputEmail1"
                      placeholder="Your Email Address"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control focus-ring focus-ring-light"
                      id="exampleInputPassword1"
                      placeholder="Your Order Number"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <a className="text-decoration-none fw-medium" href="#">
                      <span lang="es">Sign</span> in or{" "}
                      <span lang="es">create an account</span> to stay up to
                      date on your orders
                    </a>
                  </div>
                  <div className="text-center mb-3">
                    <button type="submit">Check Order Status</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default TrackOrder;
