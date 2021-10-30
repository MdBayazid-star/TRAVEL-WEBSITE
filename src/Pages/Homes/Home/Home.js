import React from "react";
import AllServices from "../AllServices/AllServices";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllServices></AllServices>
      <Review></Review>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
