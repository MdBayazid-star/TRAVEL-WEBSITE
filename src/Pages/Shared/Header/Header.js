import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import userImg from "./../../../Images/Users/user.png";

const Header = () => {
  const { logOut, user } = useAuth();
  const { displayName, photoURL } = user;
  return (
    <div className="shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-2" href="/">
              <span className="color-pink">T</span>ravel{" "}
              <span className="color-pink">...</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 navigation">
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/home"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/about"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/blog"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/contact"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/mybooking"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    My Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold"
                    to="/dashboard"
                    activeStyle={{
                      color: "#ff7c5b",
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn btn-travel fw-bold me-3">
                  Book A Tour{" "}
                </button>
                {user.email ? (
                  <Link to="/login">
                    <button onClick={logOut} className="btn btn-travel fw-bold">
                      Log Out
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-travel  fw-bold">Log In</button>
                  </Link>
                )}
                <div className="d-flex justify-content-center align-items-center">
                  {photoURL ? (
                    <span>
                      <img className="userImg ms-3" src={photoURL} alt="" />
                    </span>
                  ) : (
                    <span>
                      <img className="userImg ms-3 p-1" src={userImg} alt="" />
                    </span>
                  )}
                  {displayName ? (
                    <span className="text-Blue ts-5 color-pink fw-bold ms-2 ">
                      {displayName}
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
