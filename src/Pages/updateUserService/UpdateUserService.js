import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUserService = () => {
  const [userServices, setUserServices] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://cryptic-ridge-44622.herokuapp.com/usersServices/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserServices(data));
  }, []);
  console.log(id);
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = {
      photo: userServices.photo,
      name: updatedName,
      email: userServices.email,
    };
    setUserServices(updatedUser);
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = {
      photo: userServices.email,
      name: userServices.name,
      email: updatedEmail,
    };
    setUserServices(updatedUser);
  };
  const handleUpdateUser = (e) => {
    const url = `https://cryptic-ridge-44622.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUserServices({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  console.log(userServices);
  return (
    <div>
      <div className="Banner">
        <div className="AboutBanner py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 my-5 py-5">
                <h1 className="text-light topFont color-pink fontComfortaa">
                  Log in
                </h1>
              </div>
              <div className="col-lg-9"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="w-50 md-w-75 mx-auto shadow my-5 borderRadius-4">
            <h3 className="text-center my-3 ts-2">Update An Account</h3>
            <div className="w-75 md-w-85 mx-auto my-5">
              <form onSubmit={handleUpdateUser} className="">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleNameChange}
                    type="text"
                    className="form-control ts-5"
                    placeholder="User Name"
                    value={userServices.name || ""}
                  ></input>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleEmailChange}
                    type="email"
                    className="form-control ts-5"
                    placeholder="Email Address"
                    value={userServices.email || ""}
                  />
                </div>
                <div className="text-center">
                  <input
                    className="btn btn-travel-bg text-center"
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserService;
