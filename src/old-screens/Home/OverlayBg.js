import Link from "next/link";

const OverlayBg = () => {
  return (
    <section>
      <div className="shop_by_overlay overlay_text container d-flex">
        <div className="offset-md-1 d-flex align-items-center overlay_gap">
          <h3 className="text-white fw-semibold">Get ready for this summer</h3>
          <Link href="#" className="text-white text-uppercase">
            Shop now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 10 19"
              fill="#fff"
              className="ms-1"
            >
              <g clipPath="url(#clip0_651_577)">
                <path
                  d="M6.00045 10.2365L1.86458 14.3185C1.78067 14.4024 1.68177 14.4443 1.56788 14.4443C1.45399 14.4443 1.35509 14.4024 1.27118 14.3185L1.01943 14.0667C0.935513 13.9828 0.893555 13.8839 0.893555 13.77C0.893555 13.6561 0.935513 13.5572 1.01943 13.4733L4.61583 9.93085L1.01943 6.40637C0.935513 6.32246 0.893555 6.22356 0.893555 6.10967C0.893555 5.99578 0.935513 5.89688 1.01943 5.81297L1.27118 5.56122C1.35509 5.4773 1.45399 5.43535 1.56788 5.43535C1.68177 5.43535 1.78067 5.4773 1.86458 5.56122L6.00045 9.64314C6.08436 9.72705 6.12632 9.82595 6.12632 9.93984C6.12632 10.0537 6.08436 10.1526 6.00045 10.2365Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default OverlayBg;
