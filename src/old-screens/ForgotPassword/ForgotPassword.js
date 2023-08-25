import Layout from "@/src/components/Layout";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section>
      <Layout>
        <div className="login_page-section">
          <div className="container p-4 p-sm-4 p-md-5 p-lg-5">
            <h2 className="fw-bold">Forgot your password?</h2>
            <p>
              Enter your email and we'll send you instructions to reset your
              password.
            </p>
            <form className="border rounded-2 p-4 p-sm-4 p-md-5 p-lg-5">
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control focus-ring focus-ring-light p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="d-grid  d-md-flex justify-content-md-start d-lg-flex  justify-content-lg-start gap-2 mb-3">
                <button type="submit">Submit</button>
              </div>
              <div className="d-flex justify-content-center d-md-block justify-content-md-start d-lg-block justify-content-lg-start">
                <Link
                  className="text-decoration-none fw-medium ms-2"
                  href="/sign-in"
                  aria-label="sign-in"
                >
                  Back to Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default ForgotPassword;
