import Layout from "@/src/components/Layout";
import React, { useState } from "react";
import { loginAuth } from "@/src/redux/actions/auth";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import { LoginSchema } from "../validations/authSchema";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [statusBtn, setStatusBtn] = useState(false);
  return (
    <section>
      <Layout>
        <div className="login_page-section">
          <div className="container p-4 p-sm-4 p-md-5 p-lg-5">
            <ToastContainer autoClose={2000} />
            <h2 className="fw-bold pb-3">Sign In</h2>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                setStatusBtn(true);
                dispatch(
                  loginAuth(values, (type, res) => {
                    if (type === "success") {
                      toast.success(res?.message);
                      setTimeout(() => {
                        router.push("/");
                        setStatusBtn(false);
                      }, 3000);
                      return;
                    }
                    if (type === "error") {
                      toast.error(res?.message);
                      setTimeout(() => {
                        setStatusBtn(false);
                      }, 3000);
                    }
                  })
                );
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
                <form className="border rounded-2 p-4 p-sm-4 p-md-5 p-lg-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control focus-ring focus-ring-light p-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <div>
                        <Link
                          href="/forget-password"
                          className="text-decoration-none"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                    <input
                      name="password"
                      type="password"
                      className="form-control focus-ring focus-ring-light p-2"
                      id="exampleInputPassword1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="d-grid  d-md-flex justify-content-md-start d-lg-flex  justify-content-lg-start gap-2 mb-3">
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      disabled={statusBtn ? true : false}
                    >
                      Login to My Account
                    </button>
                  </div>
                  <div className="d-flex justify-content-center d-md-block justify-content-md-start d-lg-block justify-content-lg-start">
                    Don’t have an account?
                    <Link
                      className="text-decoration-none fw-medium ms-2"
                      href="/sign-up"
                      aria-label="sign-up"
                    >
                      Create one now.
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

export default Login;
