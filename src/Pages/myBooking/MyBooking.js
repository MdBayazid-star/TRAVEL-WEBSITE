import React, { useEffect, useState } from "react";
import BookingBanner from "./BookingBanner/BookingBanner";
import "./MyBooking.css";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ridge-44622.herokuapp.com/usersServices")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://cryptic-ridge-44622.herokuapp.com/usersServices/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = booking.filter(
              (userService) => userService._id !== id
            );
            setBooking(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <BookingBanner></BookingBanner>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {booking.map((booked) => (
                  <div class="col my-5 ">
                    <div class="card h-100 border-0 shadow service-cart ">
                      <img
                        src={booked.userServices.imgUrl}
                        class="card-img-top img-w"
                        alt="..."
                      />
                      <div class="card-body">
                        <h2 class="card-title text-uppercase ts-3">
                          tourist spot
                          <span className="color-pink">
                            {" "}
                            {booked.userServices.name}{" "}
                          </span>
                        </h2>
                        <h4 class="card-title text-uppercase my-3">
                          <span className="fw-bold"> Order KEY:</span>{" "}
                          <span className="bg-secondary text-light px-2">
                            {booked.userServices._id}
                          </span>
                        </h4>
                        <h4 class="card-title text-uppercase my-3">
                          <span className="fw-bold">Price:</span>{" "}
                          {booked.userServices.price}
                        </h4>
                        <p class="card-text ts-5">
                          <span className="fw-bold"> Description: </span>{" "}
                          {booked.userServices.descriptionFast.slice(0, 150)}
                        </p>
                      </div>
                      <div class="card-footer bg-body border-0">
                        <div className="d-flex justify-content-around my-3">
                          <button className="btn btn-travel"> Liked </button>
                          <button
                            className="btn btn-travel"
                            onClick={() => handleDeleteUserService(booked._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
