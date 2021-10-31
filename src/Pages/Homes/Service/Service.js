import * as React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const {
    id,
    name,
    imgUrl,
    review,
    price,
    days,
    Location,
    descriptionFast,
    totalReview,
  } = props.service;
  const description = descriptionFast.slice(0, 150);
  return (
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card border-0 shadow service-cart h-100 m-3">
        <img src={imgUrl} class="card-img-top img-w" alt="..." />
        <div class="card-body px-5">
          <h5 className="d-flex">
            <Rating
              className="me-3"
              initialRating={review}
              readonly
              emptySymbol={<i class="far fa-star icon-Goldenrod ts-5"></i>}
              placeholderSymbol={
                <i class="fas fa-star icon-Goldenrod ts-5"></i>
              }
              fullSymbol={<i class="fas fa-star icon-Goldenrod ts-5"></i>}
            />
            <p className="text-gray fs-4">{totalReview} Reviews</p>
          </h5>
          <h1 class="card-title fw-bold ts-2">{name}</h1>
          <p>
            <span className="fs-2 fw-bold color-pink">{price}</span>
            <span className="fs-4 text-gray fw-bold">/ Per person</span>
          </p>
          <div className="d-flex cart-dl my-3 mt-4">
            <p>{days} Days</p>
            <p>|</p>
            <p> {Location}</p>
          </div>

          <p class="card-text fs-3 text-gray my-4">{description}</p>
        </div>
        <div class="card-footer border-0 bg-white d-flex justify-content-evenly mb-4">
          <Link to={`/service/${id}`}>
            <button className="btn btn-travel">See More</button>
          </Link>
          <Link to="/">
            <button className="btn btn-travel"> Liked </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
