import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactItem = data.filter((td) => td.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div
        style={{
          height: "400px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.7)),url(${ExactItem[0]?.imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div>
          <div className="container">
            <div className="row">
              <div className="serviceDetailsBanner">
                <h5 className="d-flex">
                  <Rating
                    className="me-3"
                    initialRating={ExactItem[0]?.review}
                    readonly
                    emptySymbol={
                      <i class="far fa-star icon-Goldenrod ts-5"></i>
                    }
                    placeholderSymbol={
                      <i class="fas fa-star icon-Goldenrod ts-5"></i>
                    }
                    fullSymbol={<i class="fas fa-star icon-Goldenrod ts-5"></i>}
                  />
                  <p className="text-light fs-4">
                    {ExactItem[0]?.totalReview} Reviews
                  </p>
                </h5>
                <h1 className="ts-1 text-light fw-bold">
                  {ExactItem[0]?.name}
                </h1>
                <p className="mb-5">
                  <span className="fs-2 fw-bold color-pink">
                    {ExactItem[0]?.price}
                  </span>
                  <span className="fs-4 text-light fw-bold">/ Per person</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12 my-5">
            <h1 className="ts-1">Overview</h1>
            <p className="fs-3 text-gray">{ExactItem[0]?.descriptionFast}</p>
            <p className="fs-3 text-gray">{ExactItem[0]?.descriptionLast}</p>
            <div className="d-flex cart-dl my-3 mt-4">
              <p>
                <i class="far fa-clock color-pink me-3"></i>
                {ExactItem[0]?.days} Days
              </p>
              <p>|</p>
              <p>
                <i class="far fa-user color-pink me-3"></i> Age{" "}
                {ExactItem[0]?.requireAge}
              </p>
              <p>|</p>
              <p>
                <i class="far fa-map color-pink me-3"></i>{" "}
                {ExactItem[0]?.Location}
              </p>
            </div>
            <div>
              <h1 className="ts-1 mt-5">Gallery</h1>
              <div className="row g-4">
                <div className="col-lg-4">
                  <img
                    className="img-fluid galleryImg"
                    src={ExactItem[0]?.gallery1}
                    alt=""
                  />
                </div>
                <div className="col-lg-4 ">
                  <img
                    className="img-fluid galleryImg"
                    src={ExactItem[0]?.gallery2}
                    alt=""
                  />
                </div>
                <div className="col-lg-4 ">
                  <img
                    className="img-fluid galleryImg"
                    src={ExactItem[0]?.gallery3}
                    alt=""
                  />
                </div>
                <div className="col-lg-8 ">
                  <img
                    className="img-fluid galleryImg"
                    src={ExactItem[0]?.gallery4}
                    alt=""
                  />
                </div>
                <div className="col-lg-4 ">
                  <img
                    className="img-fluid galleryImg"
                    src={ExactItem[0]?.gallery5}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 my-5">
            <div className="shadow p-5 m-3">
              <h1>Book This Tour</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="ts-4 d-block w-100 my-3"
                  {...register("firstName", { required: true, maxLength: 20 })}
                  placeholder="Fast Name"
                />
                {errors.firstName?.type === "required" &&
                  "First name is required"}
                <input
                  className="ts-4 d-block w-100 my-3"
                  {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                  placeholder="Last Name"
                />
                {errors.lastName && "Last name is required"}

                <input
                  className="ts-4 d-block w-100 my-3"
                  type="number"
                  {...register("age", { min: 18, max: 99 })}
                  placeholder="Phone"
                />
                <input
                  className="ts-4 d-block w-100 my-3"
                  {...register("Email", {})}
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="ts-4 d-block w-100 my-3"
                  {...register("Massage", {})}
                  placeholder="Massage"
                />
                <input
                  type="submit"
                  className="btn btn-travels"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
<div></div>;
