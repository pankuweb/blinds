import Link from "next/link";

const BannerCommon = ({
  title,
  offers,
  btnSave,
  className,
  classbg,
  paragraph,
  classh1,
  classh4,
  classp,
  classbgimage,
  main_banner_class,
}) => {
  return (
    <section>
      <div className={main_banner_class}>
        <div className={classbg}>
          <div className={classbgimage}>
            <h4 className={classh4}>{title}</h4>
            <h1 className={classh1}>{offers}</h1>
            <p className={classp}>{paragraph}</p>
            <Link className={className} href="/">
              {btnSave}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
BannerCommon.defaultProps = {
  className: "rounded-0 text-uppercase btn-common",
  classbg:
    "bg_by_image bg_by_class track_by_order about_by_section contact_by_section affiliates_by_section commercial_by_section faq_by_section terms-and-conditions_by_section privacy-policy_by_section sitemap__by_section california-supply__by_section",
  classh1: "text-white mb-4 text-uppercase",
  classh4: "text-white fw-bolder mb-2",
  classp: "text-white m-0",
  classbgimage: "bg-image-center text-center",
  main_banner_class: "main_banner_class",
};

export default BannerCommon;
