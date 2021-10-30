import React from "react";
import { Link } from "react-router-dom";

const ContactBodyOne = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 my-auto">
              <div className="d-flex">
                <span className="icons">
                  <i className="ts-4 fas fa-phone-alt p-3"></i>
                </span>
                <div>
                  <h5 className="ts-4">Call Me</h5>
                  <p className="ts-5">999-777-666</p>
                </div>
              </div>
              <div className="d-flex">
                <span className="icons">
                  <i className="ts-4 far fa-envelope p-3"></i>
                </span>
                <div>
                  <h5 className="ts-4">Email</h5>
                  <p className="ts-5">freelencebayazid@email.com</p>
                </div>
              </div>
              <div className="d-flex">
                <span className="icons">
                  <i className="ts-4 fas fa-map-marker-alt p-3"></i>
                </span>
                <div>
                  <h5 className="ts-4">Location</h5>
                  <p className="ts-5">Bangladesh,Asia,Earth</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <div className="contactInfo mb-4">
                <div className="input-group mb-3 row">
                  <div className="form-floating  col-lg-6 mb-3">
                    <textarea
                      className="form-control bg-lg fs-4 h-100"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2" className="fs-4">
                      {" "}
                      &nbsp; &nbsp; Name
                    </label>
                  </div>
                  <div className="form-floating col-lg-6">
                    <textarea
                      className="form-control bg-lg fs-4 h-75"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2" className="fs-4">
                      {" "}
                      &nbsp; &nbsp; Email
                    </label>
                  </div>
                </div>
              </div>
              <div className="contactInfo me-4  w-fluid">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-lg w-100 fs-3 h-100"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label htmlFor="floatingTextarea2" className="fs-4">
                    Subjects
                  </label>
                </div>
              </div>
              <div className="my-4">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-lg c-hight fs-3"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label htmlFor="floatingTextarea2" className="fs-3">
                    Comments
                  </label>
                </div>
              </div>
              <Link to="/">
                <button className="btn btn-travel">
                  <i className="far fa-paper-plane"></i> Send Massage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBodyOne;
