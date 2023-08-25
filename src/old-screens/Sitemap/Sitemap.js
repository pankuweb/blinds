import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
import Link from "next/link";
import check from "@/assets/images/check.svg";
import UnoptimizedImage from "@/UnoptimizedImage";

const Sitemap = () => {
  return (
    <section>
      <Layout>
        <div className="sitemap-section  mb-5">
          <BannerCommon
            title=""
            offers="Blinds.com Sitemap"
            btnSave=""
            paragraph=""
            classbg="sitemap__by_section"
            className=""
            classh1="fs-1 fw-bolder"
            classh4=""
            classbgimage="w-50 mx-auto text-center text-white"
            classp="fs-3 p-0"
          />
          <div className="container">
            <div className="mb-5"></div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h5 className="fw-semibold mb-3">
                  Most Popular Window Treatments
                </h5>
                <ul className="p-0">
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">3/8” Double Cell Light Filtering</Link>
                  </li>
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">2” Deluxe Wood Blinds</Link>
                  </li>
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">3/8” Double Cell Blackout</Link>
                  </li>
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">Completely Cordless Mini Blind</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h5 className="fw-semibold mb-3">Draperies</h5>
                <ul className="p-0">
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">Custom Draperies</Link>
                  </li>
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">Drapery Hardware</Link>
                  </li>
                  <li className="mb-2">
                    <UnoptimizedImage
                      src={check}
                      alt="check-icons"
                      className="commercial-blue-section"
                    />
                    <Link href="">Valances</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Sitemap;
