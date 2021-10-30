import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserUpdate = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // Update User
  const handleImageChange = (e) => {
    const updatePhoto = e.target.value;
    const updatedUser = {
      photo: updatePhoto,
      name: user.name,
      email: user.email,
    };
    setUser(updatedUser);
  };
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = {
      photo: user.photo,
      name: updatedName,
      email: user.email,
    };
    setUser(updatedUser);
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = {
      photo: user.email,
      name: user.name,
      email: updatedEmail,
    };
    setUser(updatedUser);
  };
  const handleUpdateUser = (e) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUser({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };
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
      <div>
        <div className="container">
          <div className="row">
            <div className="w-50 md-w-75 mx-auto shadow my-5 borderRadius-4">
              <h3 className="text-center my-3 ts-2">Update An Account</h3>
              <div className="w-75 md-w-85 mx-auto my-5">
                <form onSubmit={handleUpdateUser} className="">
                  {/* <div className="mb-3"> */}
                  <div className="form-floating mb-3">
                    <input
                      onBlur={handleImageChange}
                      type="text"
                      className="form-control ts-5"
                      id="floatingInput"
                      placeholder="Image Url"
                    />
                    <label for="floatingInput" className="ts-5">
                      Image Url
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onBlur={handleNameChange}
                      type="text"
                      className="form-control ts-5"
                      id="floatingInput"
                      placeholder="User Name"
                    />
                    <label for="floatingInput" className="ts-5">
                      User Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onBlur={handleEmailChange}
                      type="email"
                      className="form-control ts-5"
                      id="floatingInput"
                      placeholder="Email Address"
                    />
                    <label for="floatingInput" className="ts-5">
                      Email address
                    </label>
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
        {/* <h2>Update: {user.name}</h2>
        <p>
          <small>{id}</small>
        </p>
        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            onChange={handleNameChange}
            value={user.name || ""}
          />
          <input
            type="email"
            onChange={handleEmailChange}
            value={user.email || ""}
          />
          <input type="submit" value="Update" />
        </form> */}
      </div>
    </div>
  );
};

export default UserUpdate;
