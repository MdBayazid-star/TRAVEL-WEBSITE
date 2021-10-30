import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="title">
        <h4 className="sub-heading">See Our All Packages</h4>
        <h3 class="heading">
          <span>P</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </h3>
      </div>
      <div className="container ">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
