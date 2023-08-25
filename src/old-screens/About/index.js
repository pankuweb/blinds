import BannerCommon from "@/src/components/BannerCommon";
import Layout from "@/src/components/Layout";
import React from "react";
import Blind from "./Blind";
import Counter from "./Counter";
import Inovetion from "./Inovetion";
import GuidSec from "./GuidSec";
import Banner from "../Home/Banner";

const About = () => {
  return (
    <section>
      <Layout>
        <div className="about_blinds_section">
          <div className="mt-2">
            <BannerCommon
              className=""
              title={""}
              btnSave={""}
              paragraph="We use innovation and technology to make complex projects surprisingly easy."
              offers="ALL ABOUT BLIDS.COM"
              classh1=""
              classbg="about_by_section"
              classh4="text-dark fw-semibold"
              classp="text-dark fw-semibold"
            />
          </div>
          <Blind />
          <Counter />
          <Inovetion />
          <Banner />
          <GuidSec />
        </div>
      </Layout>
    </section>
  );
};

export default About;
