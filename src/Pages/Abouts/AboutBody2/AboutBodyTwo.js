import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../About.css";
import AboutSliderImg1 from "./../../../Images/About/aboutSlider1.jpg";
import AboutSliderImg2 from "./../../../Images/About/aboutSlider2.jpg";
import AboutSliderImg3 from "./../../../Images/About/aboutSlider3.jpg";
import AboutSliderImg4 from "./../../../Images/About/aboutSlider4.jpg";
// import AboutSliderImg1 from "./../../../Images/About/aboutSlider1.jpg";
const AboutBodyTwo = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="my-5">
      <div className="text-center pt-5 my-5">
        <div className="title">
          <h4 className="sub-heading">Best Places</h4>
          <h3 class="heading">
            <span>p</span>
            <span>l</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Carousel responsive={responsive}>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg1}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg2}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg3}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg4}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg1}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
            <div className="AboutSlider">
              <img
                src={AboutSliderImg2}
                className="AboutSliderImg shadow"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyTwo;
