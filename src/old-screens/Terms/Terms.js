import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";

const Terms = () => {
  return (
    <section>
      <Layout>
        <div className="terms-and-conditions">
          <BannerCommon
            title=""
            offers="Terms and Conditions
"
            btnSave=""
            paragraph=""
            classbg="terms-and-conditions_by_section"
            className=""
            classh1="fs-1 fw-bolder"
            classh4=""
            classbgimage="w-50 mx-auto text-center text-white"
            classp="fs-3 p-0"
          />
          <div className="container">
            <div className="mb-5">
              <div>
                <h6 className="fw-semibold">Terms of Use</h6>
                <p>
                  This site, or any portion of this site, may not be reproduced,
                  duplicated, copied, sold, resold or otherwise exploited for
                  any commercial purpose that is not expressly permitted by
                  Global Custom Commerce L.P. Global Custom Commerce L.P.
                  reserves the right to refuse service and/or cancel orders at
                  its discretion including, without limitation, if Global Custom
                  Commerce L.P. believes that customer conduct violates
                  applicable law or is harmful to the interests of Global Custom
                  Commerce L.P..
                </p>
              </div>
              <div>
                <h6 className="fw-semibold">Copyright</h6>
                <p>
                  All content and any compilations thereof included on this
                  site, including, but not limited to, text, graphics, logos,
                  icons, images, audio clips and software, is the property of
                  Global Custom Commerce L.P. and is protected by U.S. and
                  international copyright laws. All software used on this site
                  is the property of Global Custom Commerce L.P. and protected
                  by U.S. and international copyright laws. The content and
                  software on this site may be used as a shopping resource only.
                  Any other use, including the reproduction, modification,
                  distribution, transmission, republication, display or
                  performance of the content on this site is strictly
                  prohibited.
                </p>
              </div>
              <div>
                <h6 className="fw-semibold">Trademarks</h6>
                <p>
                  Blinds.ca is a trademark of Global Custom Commerce L.P. in the
                  United States. Blinds.ca graphics, logos and service names are
                  trademarks of Global Custom Commerce L.P. and may not be used
                  in connection with any product or service that is not Global
                  Custom Commerce L.P. in any manner that is likely to cause
                  confusion among customers or in any manner that disparages or
                  discredits Global Custom Commerce L.P..
                </p>
              </div>
              <div>
                <h6 className="fw-semibold">Disclaimer</h6>
                <p>
                  THIS SITE IS PROVIDED BY Global Custom Commerce L.P. ON AN "AS
                  IS" BASIS. Global Custom Commerce L.P. MAKES NO
                  REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                  AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT
                  MATERIALS OR PRODUCTS INCLUDED ON THIS SITE. TO THE FULL
                  EXTENT PERMISSIBLE BY APPLICABLE LAW, Global Custom Commerce
                  L.P. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING,
                  BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND
                  FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL Global
                  Custom Commerce L.P. BE LIABLE FOR ANY DAMAGES OF ANY KIND
                  ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED
                  TO, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE AND CONSEQUENTIAL
                  DAMAGES.
                </p>
              </div>
              <div>
                <h6 className="fw-semibold">Applicable Law</h6>
                <p>
                  This site is created and controlled by Global Custom Commerce
                  L.P. in the State of Texas, USA. As such, the laws of the
                  State of Texas will govern these disclaimers, terms and
                  conditions without giving effect to any principles of
                  conflicts of laws. We reserve the right to make changes to our
                  site and these disclaimers, terms and conditions at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Terms;
