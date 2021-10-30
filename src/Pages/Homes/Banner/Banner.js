import React from "react";
import "./Banner.css";
import cloud1 from "./../../../Images/Banner/cloud1.png";
import cloud2 from "./../../../Images/Banner/cloud2.png";
import cloud3 from "./../../../Images/Banner/cloud3.png";
import cloud4 from "./../../../Images/Banner/cloud4.png";
import cloud5 from "./../../../Images/Banner/cloud5.png";
const Banner = () => {
  return (
    <div class="banner">
      <div class="clouds">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-12">
              <div className="banter_Text shadow mt-5">
                <h1 className="text-center color-pink fs-1">
                  ADVENTURE IS WORTHWHILE
                </h1>
                <p className=" w-50 w-lg-50 w-md-75 w-sm-100 mx-auto text-center fs-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  neque vel odit aperiam animi harum labore accusamus pariatur
                  reiciendis itaque.
                </p>
              </div>
              <div class="input-group mb-3 my-5 py-5 w-50 mx-auto">
                <input
                  type="text"
                  class="form-control fs-3"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text btn btn-travel fw-bold"
                  id="basic-addon2"
                >
                  Search Tour
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src={cloud2} style={{ "--i": "1" }} />
        <img src={cloud2} style={{ "--i": "2" }} />
        <img src={cloud3} style={{ "--i": "3" }} />
        <img src={cloud4} style={{ "--i": "4" }} />
        <img src={cloud5} style={{ "--i": "5" }} />
      </div>
    </div>
  );
};

export default Banner;
