import React from "react";
import guid from "@/assets/images/guid-1.webp";
import guid_1 from "@/assets/images/guid-2.webp";
import guid_2 from "@/assets/images/guid-3.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GuidSec = () => {
  return (
    <div className="container">
      <div className="guided-sec">
        <div className="container  mb-5">
          <div className="row gap-5">
            <div className="col-md-5">
              <LazyLoadImage
                alt={guid.alt}
                effect="blur"
                src={guid.src}
                className="fade-in-down
                "
              />
            </div>
            <div className="col-md-6 mt-5">
              <h2 className="fw-bold fs-1">Guided by our four core values.</h2>
              <p>
                In our work, we embrace four core values: Evolve Continuously,
                Experiment Without Fear, Express Yourself, and Enjoy the Ride.
                These values drive how we work together, focus on our customers,
                and create technology that generates growth.
                <br />
                Around the office, you’ll see and hear a lot about our core
                values. That’s because it’s genuinely how we work. At some
                companies, values are just part of the marketing plan or
                employee handbook, but not at Blinds.com. We refer to them all
                the time because they help us stay on the right path.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="evolve-sec">
        <div className="container  mb-5">
          <div className="row gap-5">
            <div className="col-md-5">
              <h6 className="fw-bold">Evolve Continuously</h6>
              <p className="m-0 fw-medium">
                Even when things are working well, we push the boundaries and
                look for ways to improve, whether ourselves, our business
                practices, or our customers’ experiences.
              </p>
              <h6 className="fw-bold">Experiment without Fear</h6>
              <p className="m-0 fw-medium">
                As innovators and empowered members of our work community, we
                look for solutions and set aside pre-conceptions. Failures
                signal new opportunities to try again with new insights.
              </p>
              <h6 className="fw-bold">Express Yourself</h6>
              <p className="m-0 fw-medium">
                Our people are creative individuals with a lifetime of
                experiences they bring to the community. We value that
                uniqueness and leverage it to help boost innovation and define
                vision.
              </p>
              <h6 className="fw-bold">Enjoy the Ride</h6>
              <p className="m-0 fw-medium">
                We make plenty of time for recreation, group activities, office
                parties, personal development, and plenty of perks. We’ve always
                said, you sometimes spend more time at work than at home, so it
                should be fun.
              </p>
            </div>
            <div className="col-md-6 mt-2">
              <LazyLoadImage
                alt={guid_1.alt}
                effect="blur"
                src={guid_1.src} />
            </div>
          </div>
        </div>
      </div>
      <div className="guided-sec">
        <div className="container  mb-5">
          <div className="row gap-3">
            <div className="col-md-6">
              <LazyLoadImage
                alt={guid_2.alt}
                effect="blur"
                src={guid_2.src}
                className="w-100" />
            </div>
            <div className="col-md-5 mt-2">
              <h2 className="fw-bold fs-1">join our team.</h2>
              <p>
                We work hard to create a culture that values our associates not
                just as employees but as people on their own path. Whether
                you’re an ecommerce developer, business analyst, or design
                consultant, fostering personal growth and development means
                providing opportunities for you to learn and advance — to
                stretch yourself into a new role. Our philosophy allows you to
                be true to yourself while working on the company’s goals. By
                committing resources for training, mentoring, and networking,
                your professional development becomes part of our
                responsibility. We believe investing in you means you’ll be
                fully engaged and love coming to work every day. Just like the
                rest of us do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidSec;
