import product from "@/assets/images/product_image.webp";
import category from "@/assets/images/news+products.webp";
import Link from "next/link";
import UnoptimizedImage from "@/UnoptimizedImage";
import rightarrow from "@/assets/images/right-arrow.svg";

const LatestNews = () => {
  return (
    <section>
      <div className="shop_by_latest_news">
        <div className="container mb-5">
          <h3 className="text-center fw-semibold mb-5">Our Latest News</h3>
          <div className="row">
            <div className="latest_news_12 col-12 col-md-6 col-lg-4">
              <UnoptimizedImage
                src={product}
                alt="img-content"
                loading="lazy"
              />
              <div className="latest_news_content shadow text-center p-3">
                <small className="fw-semibold mb-2">
                  Life Style{" "}
                  <span className="fw-normal" lang="es">
                    Auguest 6,2022
                  </span>
                </small>
                <h4>
                  How To Teach Children To Dress Themselves: The Ultimate Guide
                </h4>
                <Link
                  href="#"
                  className="text-dark text-uppercase btn btn-sm p-0"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 10 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_651_577)">
                      <path
                        d="M6.00045 10.2365L1.86458 14.3185C1.78067 14.4024 1.68177 14.4443 1.56788 14.4443C1.45399 14.4443 1.35509 14.4024 1.27118 14.3185L1.01943 14.0667C0.935513 13.9828 0.893555 13.8839 0.893555 13.77C0.893555 13.6561 0.935513 13.5572 1.01943 13.4733L4.61583 9.93085L1.01943 6.40637C0.935513 6.32246 0.893555 6.22356 0.893555 6.10967C0.893555 5.99578 0.935513 5.89688 1.01943 5.81297L1.27118 5.56122C1.35509 5.4773 1.45399 5.43535 1.56788 5.43535C1.68177 5.43535 1.78067 5.4773 1.86458 5.56122L6.00045 9.64314C6.08436 9.72705 6.12632 9.82595 6.12632 9.93984C6.12632 10.0537 6.08436 10.1526 6.00045 10.2365Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="latest_news_12 col-12 col-md-6 col-lg-4">
              <UnoptimizedImage
                src={category}
                alt="img-content"
                loading="lazy"
              />
              <div className="latest_news_content shadow text-center p-3">
                <small className="fw-semibold mb-2">
                  Company News{" "}
                  <span className="fw-normal" lang="es">
                    Auguest 6,2022
                  </span>
                </small>
                <h4>Honor Earth Day Fourth Annual Ladybug Love Campaign</h4>
                <Link
                  href="#"
                  className="text-dark text-uppercase btn btn-sm p-0"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 10 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_651_577)">
                      <path
                        d="M6.00045 10.2365L1.86458 14.3185C1.78067 14.4024 1.68177 14.4443 1.56788 14.4443C1.45399 14.4443 1.35509 14.4024 1.27118 14.3185L1.01943 14.0667C0.935513 13.9828 0.893555 13.8839 0.893555 13.77C0.893555 13.6561 0.935513 13.5572 1.01943 13.4733L4.61583 9.93085L1.01943 6.40637C0.935513 6.32246 0.893555 6.22356 0.893555 6.10967C0.893555 5.99578 0.935513 5.89688 1.01943 5.81297L1.27118 5.56122C1.35509 5.4773 1.45399 5.43535 1.56788 5.43535C1.68177 5.43535 1.78067 5.4773 1.86458 5.56122L6.00045 9.64314C6.08436 9.72705 6.12632 9.82595 6.12632 9.93984C6.12632 10.0537 6.08436 10.1526 6.00045 10.2365Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="latest_news_12 col-12 col-md-12 col-lg-4">
              <UnoptimizedImage
                src={product}
                alt="img-content"
                loading="lazy"
              />
              <div className="latest_news_content shadow text-center p-3">
                <small className="fw-semibold mb-2">
                  Company News
                  <span className="fw-normal" lang="es">
                    August 6, 2022
                  </span>
                </small>
                <h4>Providing Filtered Water For The Communities</h4>
                <Link
                  href="#"
                  className="text-dark text-uppercase btn btn-sm p-0"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 10 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_651_577)">
                      <path
                        d="M6.00045 10.2365L1.86458 14.3185C1.78067 14.4024 1.68177 14.4443 1.56788 14.4443C1.45399 14.4443 1.35509 14.4024 1.27118 14.3185L1.01943 14.0667C0.935513 13.9828 0.893555 13.8839 0.893555 13.77C0.893555 13.6561 0.935513 13.5572 1.01943 13.4733L4.61583 9.93085L1.01943 6.40637C0.935513 6.32246 0.893555 6.22356 0.893555 6.10967C0.893555 5.99578 0.935513 5.89688 1.01943 5.81297L1.27118 5.56122C1.35509 5.4773 1.45399 5.43535 1.56788 5.43535C1.68177 5.43535 1.78067 5.4773 1.86458 5.56122L6.00045 9.64314C6.08436 9.72705 6.12632 9.82595 6.12632 9.93984C6.12632 10.0537 6.08436 10.1526 6.00045 10.2365Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
