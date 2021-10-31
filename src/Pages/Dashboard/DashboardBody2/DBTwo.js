import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./../Dashboard.css";

const DBTwo = () => {
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
      <div className="container">
        <div className="row">
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
          <div className="col-lg-6"></div>
          <div className="col-lg-6 my-5">
            <div className="addService shadow">
              <h2 className="ts-3 color-pink text-center mb-4 fw-bold">
                Add A Service
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="ts-4 d-block w-100 my-3"
                  {...register("name", { required: true, maxLength: 20 })}
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
                <input className="btn btn-travels" value="ADD" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBTwo;
