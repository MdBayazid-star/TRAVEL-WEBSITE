import React from "react";
import team1 from "./../../../Images/About/team-1.jpg";
import team2 from "./../../../Images/About/team-2.jpg";
import team3 from "./../../../Images/About/team-3.jpg";
import "./../About.css";

const AboutBodyFour = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="title">
          <h4 className="sub-heading">Our Tour Guide</h4>
          <h3 class="heading">
            <span>G</span>
            <span>u</span>
            <span>i</span>
            <span>d</span>
            <span>e</span>
            <span>s</span>
          </h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card cart h-100">
              <img src={team1} class="card-img-top" alt="..." />
              <div class="card-body my-4 text-center">
                <h5 class="card-title ts-3 fw-bold color-pink">Merrie Lewis</h5>
                <p class="card-text ts-5 fw-bold text-gray">Tour Guide</p>
                <div className="social-icons">
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i class="fab fa-linkedin"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cart h-100">
              <img src={team2} class="card-img-top" alt="..." />
              <div class="card-body my-4 text-center">
                <h5 class="card-title ts-3 fw-bold color-pink">Merrie Lewis</h5>
                <p class="card-text ts-5 fw-bold text-gray">Tour Guide</p>
                <div className="social-icons">
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i class="fab fa-linkedin"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cart h-100">
              <img src={team3} class="card-img-top" alt="..." />
              <div class="card-body my-4 text-center">
                <h5 class="card-title ts-3 fw-bold color-pink">Merrie Lewis</h5>
                <p class="card-text ts-5 fw-bold text-gray">Tour Guide</p>
                <div className="social-icons">
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i class="fab fa-linkedin"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyFour;
