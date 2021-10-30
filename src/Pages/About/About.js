import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutBodyOne from "./AboutBody1/AboutBodyOne";
import AboutBodyTwo from "./AboutBody2/AboutBodyTwo";
import AboutBodyThree from "./AboutBody3/AboutBodyThree";
import AboutBodyFour from "./AboutBody4/AboutBodyFour";

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <AboutBodyOne></AboutBodyOne>
      <AboutBodyTwo></AboutBodyTwo>
      <AboutBodyThree></AboutBodyThree>
      <AboutBodyFour></AboutBodyFour>
    </div>
  );
};

export default About;
