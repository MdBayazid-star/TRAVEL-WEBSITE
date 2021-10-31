import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import "./Dashboard.css";

const Dashboard = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("http://cryptic-ridge-44622.herokuapp.com/usersServices/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);
  useEffect(() => {
    fetch("https://cryptic-ridge-44622.herokuapp.com/usersServices")
      .then((res) => res.json())
      .then((data) => setData(data));
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
            const remainingUsers = Data.filter(
              (userService) => userService._id !== id
            );
            setData(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="div">
      <div className="title">
        <h4 className="sub-heading">Added Services Info</h4>
        <h3 class="heading">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h3>
      </div>
      <div
        className="container border my-4 mx-auto overflow-scroll d-flex justify-content-center"
        style={{ height: "660px" }}
      >
        <div style={{ width: "1200px" }}>
          <div className="shadow border-0 my-3">
            <div className="d-flex">
              <div
                className="d-flex flex-column text-center border-end justify-content-center align-items-center"
                style={{ width: "300px" }}
              >
                <p className="align-self-center text-info px-1 ts-4">User</p>
              </div>
              <div
                className="d-flex flex-column text-center border-end justify-content-center align-items-center"
                style={{ width: "300px" }}
              >
                <p className="text-center  px-1 ts-4 d-flex align-items-center">
                  Package Title
                </p>
              </div>
              <div
                style={{ width: "115px" }}
                className="d-flex flex-column text-center border-end justify-content-center align-items-center"
              >
                <p className="text-success ts-4">Time & Rating</p>
              </div>
              <div
                className="d-flex justify-content-center text-danger border-end"
                style={{ width: "100px" }}
              >
                <p className="align-self-center ts-4">Cost</p>
              </div>
              <div
                className="d-flex flex-column text-center border-end justify-content-center align-items-center"
                style={{ width: "185px" }}
              >
                <p className="ts-4">Photo</p>
              </div>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ width: "150px" }}
              >
                <p className="ts-4">Delete & Update</p>
              </div>
            </div>
          </div>
          {Data.map((userData) => (
            <div className="border my-3 p-2">
              <div className="d-flex">
                <div
                  className="d-flex flex-column justify-content-center border-end"
                  style={{ width: "300px" }}
                >
                  <p className="align-self-center text-info px-1  ts-4">
                    {" "}
                    {userData.name}
                  </p>
                  <p className="align-self-center text-warning px-1  ts-4">
                    {userData.email}
                  </p>
                </div>
                <div className="d-flex border-end" style={{ width: "300px" }}>
                  <p className="d-flex text-center align-self-center fw-bold px-1  ts-4">
                    {userData.userServices.name}
                  </p>
                </div>
                <div
                  style={{ width: "115px" }}
                  className="d-flex flex-column text-center border-end justify-content-center align-items-center"
                >
                  <p className="text-success  ts-4">
                    {userData.userServices.days}
                  </p>
                  <Rating
                    className="me-3 align-self-center ps-2"
                    initialRating={userData.userServices.rating}
                    readonly
                    emptySymbol={
                      <i className="far fa-star text-warning ts-5"></i>
                    }
                    placeholderSymbol={
                      <i className="fas fa-star text-warning ts-5"></i>
                    }
                    fullSymbol={
                      <i className="fas fa-star text-warning ts-5"></i>
                    }
                  />
                </div>
                <div
                  className="d-flex justify-content-center text-danger border-end"
                  style={{ width: "100px" }}
                >
                  <p className="align-self-center ts-4">
                    {userData.userServices.price}
                  </p>
                </div>
                <div className="border-end" style={{ width: "185px" }}>
                  <img
                    className="img-fluid mx-2 "
                    style={{ width: "170px", height: "90px" }}
                    src={userData.userServices.imgUrl}
                    alt=""
                  />
                </div>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ width: "150px" }}
                >
                  <button
                    onClick={() => handleDeleteUserService(userData._id)}
                    type="button"
                    className="btn btn-travel"
                  >
                    Delete
                  </button>
                  <Link to={`/updateUsersServices/${userData._id}`}>
                    <button type="button" className="mt-2 btn btn-travel">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
