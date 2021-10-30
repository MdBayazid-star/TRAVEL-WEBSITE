import React from "react";
import "./Gallery.css";
import g1 from "./../../../Images/Gallery/g-1.jpg";
import g2 from "./../../../Images/Gallery/g-2.jpg";
import g3 from "./../../../Images/Gallery/g-3.jpg";
import g4 from "./../../../Images/Gallery/g-4.jpg";
import g5 from "./../../../Images/Gallery/g-5.jpg";
import g6 from "./../../../Images/Gallery/g-6.jpg";
import g7 from "./../../../Images/Gallery/g-7.jpg";
import g8 from "./../../../Images/Gallery/g-8.jpg";
import g9 from "./../../../Images/Gallery/g-9.jpg";

const Gallery = () => {
  return (
    <div className="gallery my-5">
      <div className="">
        <div className="title">
          <h4 className="sub-heading">Ours Gallery</h4>
          <h3 class="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
          </h3>
        </div>
        <div class="box-container">
          <div class="box">
            <img src={g1} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g2} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g3} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g4} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g5} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g6} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g7} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g8} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g9} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
