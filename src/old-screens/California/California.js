import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";

const California = () => {
  return (
    <section>
      <Layout>
        <div className="california-supply-section  mb-5">
          <BannerCommon
            title=""
            offers="California Transparency in Supply Chain Act Disclosure"
            btnSave=""
            paragraph=""
            classbg="california-supply__by_section"
            className=""
            classh1="fs-1 fw-bolder lh-sm"
            classh4=""
            classbgimage="w-50 mx-auto text-center text-white"
            classp="fs-3 p-0"
          />
          <div className="container">
            <div className="mb-5"></div>
            <p>
              The Global Custom Commerce, its affiliates, divisions, and
              subsidiaries strive to conduct business in a responsible manner.
              As we expand our business activities and work with suppliers
              domestically and globally to meet customers' needs, it is
              important to preserve our collective commitment to human rights
              and safety in the workplace.
            </p>
            <p>
              The Global Custom Commerce expects that all suppliers will abide
              by all applicable international and local laws, rules and
              regulations in the manufacture and distribution of merchandise or
              services provided to The Global Custom Commerce. All suppliers are
              strongly encouraged to exceed The Global Custom Commerce’s
              guidelines and promote continuous improvement throughout their
              operations.
            </p>
            <p>
              On January 1, 2012, the California Transparency in Supply Chains
              Act of 2010 (SB 657) went into effect in the State of California.
              This law is designed to increase the amount of information made
              available by manufacturers and retailers regarding their efforts
              (if any) to address the issue of slavery and human trafficking,
              thereby allowing consumers to make better, more informed choices
              regarding the products they buy and the companies they choose to
              support.
            </p>
            <h5 className="fw-semibold mb-3">
              Our efforts include: Supply Chain Verification
            </h5>
            <p>
              In addition to the contractual obligations outlined above, Global
              Custom Commerce performs factory assessments (Audits) of suppliers
              of private brand and direct import products on a periodic basis.
              Every factory receives an Audit at least every two (2) years. The
              majority of our factories receive a new Audit every six (6) months
              to one (1) year, while those achieving a 95% score or better
              receive a new audit less frequently. These assessments are
              conducted by trained individuals from our internal SER team as
              well as our third-party social responsibility firm partners.
              Notably, almost a quarter of the questions used in these Audits
              focuses on the risks associated with the various types of forced
              and child labor and other national laws associated with them.
            </p>
            <h5 className="fw-semibold mb-3">Supplier Audits</h5>
            <p>
              Global Custom Commerce evaluates and verifies suppliers'
              compliance with our SER Standards via on-site auditing. As
              described above, we audit all factories manufacturing private
              brand and direct import products while contractually holding our
              national brand partners to the same level of due diligence.
              Announced audits are conducted prior to placing any purchase
              orders with a private brand or direct import supplier. We also
              utilize pre-source assessments, specific response Audits when we
              are directly made aware of an issue by any source, and a
              comprehensive risk based re-audit program, which include both
              announced and unannounced audits, to ensure these factories are
              monitored on a continuous basis. At the conclusion of every Audit
              where an issue of noncompliance is found, a Corrective and
              Preventive Action (CAPA) plan is created with firm timelines based
              on the level of risk (High 30 days, Medium 90 days). Global Custom
              Commerce has a policy of verifying the CAPA implementation to
              confirm that the factories are meeting the commitments set forth
              in the CAPA plan. Evidence of forced or child labor during any of
              the aforementioned discovery methods is deemed a "Critical
              Deficiency" and results in a multi-step engagement between The
              Global Custom Commerce and the supplier. This engagement consists
              of three (3) visits to the factory over a six (6) month period. At
              the completion of this engagement, a new Audit is required and the
              factory must demonstrate systemic improvements or risk termination
              by The Global Custom Commerce.
            </p>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default California;
