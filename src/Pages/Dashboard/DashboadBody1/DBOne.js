import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "./../../../Images/Users/user.png";

const DBOne = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ridge-44622.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://cryptic-ridge-44622.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <div className="">
        <div className="my-5">
          <div className="title">
            <h4 className="sub-heading">Added Users Info</h4>
            <h3 class="heading">
              <span>u</span>
              <span>s</span>
              <span>e</span>
              <span>a</span>
              <span>r</span>
              <span>s</span>
            </h3>
          </div>
          <div className="container"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-lg-4 my-5 shadow borderRadius-4">
                  <h1 className="text-center color-pink fw-bold mt-5">
                    Users {users.length}
                  </h1>
                  <hr />
                  <div className="mx-4 mt-3">
                    <div
                      className="row overflow-scroll"
                      // style={{ width: "100%" }}
                    >
                      {users.map((user) => (
                        <div className="d-flex justify-content-around align-items-center p-3 px-4 my-4 shadow borderRadius-4">
                          <div className="w-100%">
                            <div>
                              {user.photo ? (
                                <span>
                                  <img
                                    className="userImg ms-3"
                                    src={user.photo}
                                    alt=""
                                  />
                                </span>
                              ) : (
                                <span>
                                  <img
                                    className="userImg ms-3 p-1"
                                    src={userImg}
                                    alt=""
                                  />
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="">
                            <div className="d-flex flex-column align-items-center">
                              {user.name ? (
                                <span className="fs-3">{user.name}</span>
                              ) : (
                                <span className="">name</span>
                              )}
                              {user.email ? (
                                <span className="fs-5">{user.email}</span>
                              ) : (
                                <span className="fs-5">info@example.com</span>
                              )}
                            </div>
                          </div>
                          <div className=" d-flex align-items-center justify-content-center">
                            <Link to={`/users/${user._id}`}>
                              <button className="btn btn-travel me-2">
                                Update
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDeleteUser(user._id)}
                              className="btn btn-danger"
                            >
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default DBOne;
