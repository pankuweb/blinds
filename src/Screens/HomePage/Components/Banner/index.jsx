import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="main_banner_class">
        <div className="bg_by_image">
          <div className={"bg-image-center text-center"}>
            <h4 className={"text-white fw-bolder mb-2"}>Heavy Discounts</h4>
            <h1 className={"text-white mb-4 text-uppercase"}>
              Get 40% Off On Blinds
            </h1>
            <p className={"text-white m-0"}></p>
            <Link className={"rounded-0 text-uppercase btn-common"} href="/">
              Save now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
