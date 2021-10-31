import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://cryptic-ridge-44622.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added Successfully");
          reset();
        }
      });
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
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className=" my-5 shadow borderRadius-4">
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
                            <Link to={`/updateUser/${user._id}`}>
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
              <div className="col-lg-8 col-md-12 col-12">
                <div>
                  <div className=" my-5">
                    <div className="addService shadow">
                      <h2 className="ts-3 color-pink text-center mb-4 fw-bold">
                        Add A Service
                      </h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("name", {
                            required: true,
                            maxLength: 20,
                          })}
                          placeholder="Name"
                        />
                        <textarea
                          className="ts-4 d-block w-100 my-3"
                          {...register("descriptionFast")}
                          placeholder="Description"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          type="number"
                          {...register("price")}
                          placeholder="price"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("imgUrl")}
                          placeholder="image URL Main"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("gallery1")}
                          placeholder="Extra Img One"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("gallery2")}
                          placeholder="Extra Img Two"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("gallery3")}
                          placeholder="Extra Img Three"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("gallery4")}
                          placeholder="Extra Img Four"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("gallery5")}
                          placeholder="Extra Img Five"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("days", {})}
                          placeholder="Days"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("requireAge", {})}
                          placeholder="Require Age"
                        />
                        <input
                          className="ts-4 d-block w-100 my-3"
                          {...register("Location", {})}
                          placeholder="Location"
                        />
                        <input
                          className="btn btn-travels"
                          value="ADD"
                          type="submit"
                        />
                      </form>
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
