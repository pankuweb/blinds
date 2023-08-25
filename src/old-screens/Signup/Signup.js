import Layout from "@/src/components/Layout";
import Link from "next/link";
import { Formik } from "formik";
import { SignupSchema } from "../validations/authSchema";
import { useDispatch } from "react-redux";
import { registerAuth } from "@/src/redux/actions/auth";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <section>
      <Layout>
        <div className="login_page-section">
          <div className="container p-4 p-sm-4 p-md-5 p-lg-5">
            <ToastContainer autoClose={2000} />
            <h2 className="fw-bold pb-3">Create an Account</h2>
            <Formik
              initialValues={{
                first_name: "",
                middle_name: "",
                last_name: "",
                mobile: Number(),
                email: "",
                password: "",
                confirm_password: "",
                position: "Customer",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, {}) => {
                dispatch(registerAuth(values));
              }}
            >
              {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="border rounded-2 p-4 p-sm-4 p-md-5 p-lg-5"
                >
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.first_name && touched.first_name ? (
                      <p className="text-danger">{errors.first_name}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="middle_name"
                      value={values.middle_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.middle_name && touched.middle_name ? (
                      <p className="text-danger">{errors.middle_name}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.last_name && touched.last_name ? (
                      <p className="text-danger">{errors.last_name}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="text-danger">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Mobile
                    </label>
                    <input
                      type="mobile"
                      className="form-control focus-ring focus-ring-light p-2"
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobile && touched.mobile ? (
                      <p className="text-danger">{errors.mobile}</p>
                    ) : null}
                  </div>
                  <div className="d-grid  d-md-flex justify-content-md-start d-lg-flex  justify-content-lg-start gap-2 mb-3">
                    {/* <button type="submit">Create an Account</button> */}
                    {!loadingBtn ? (
                      <button type="submit" className=" btn btn-primary mx-3">
                        Create an Account
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className=" btn btn-primary mx-3"
                      >
                        Create an Account
                      </button>
                    )}
                  </div>
                  <div>
                    <ul className="p-0 ms-3">
                      <li>Track your order</li>
                      <li>
                        Change delivery information (within 24 hours of
                        ordering)
                      </li>
                      <li>View past order details</li>
                      <li>Save carts and favorite products</li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-center d-md-block justify-content-md-start d-lg-block justify-content-lg-start">
                    Already have an account?
                    <Link
                      className="text-decoration-none fw-medium ms-2"
                      href="/sign-in"
                      aria-label="sign-in"
                    >
                      Sign In.
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Signup;
