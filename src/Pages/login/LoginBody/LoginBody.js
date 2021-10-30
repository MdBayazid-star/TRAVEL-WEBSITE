import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const LoginBody = () => {
  const { signInUsingGoogle } = useAuth();
  // const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();

  const redirect_uri = location.state?.from || "/home";

  const handleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="w-50 md-w-75 mx-auto shadow my-5 rounded">
          <h3 className="text-center my-3 ts-2">Enter An Account</h3>
          <div className="w-75 md-w-85 mx-auto my-5">
            <form onSubmit={handleRegistration} className="">
              {/* <div className="mb-3"> */}
              <div className="form-floating mb-3">
                <input
                  onBlur={handleEmail}
                  type="email"
                  className="form-control ts-5"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" className="ts-5">
                  Email address
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onBlur={handlePassword}
                  type="password"
                  className="form-control ts-5"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword" className="ts-5">
                  Password
                </label>
              </div>
              <div className="row mb-3 text-danger">{error}</div>
              <div className="text-center my-3">
                <button type="submit" className="btn btn-travel">
                  Submit
                </button>
              </div>
              <p className="ts-5">
                Forget Password? <Link>Click Here</Link>
              </p>
              <p className="ts-5">
                Don't have an account? <Link to="/signup">Sing up</Link>
              </p>
            </form>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 ">
                <button
                  onClick={handleLogin}
                  className="btn btn-travel btn-travel-bg me-3"
                >
                  <i className="fab fa-google"></i> Google SingIn
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <button
                  className="btn btn-travel btn-travel-bg"
                  // onClick={handleGithubLogin}
                >
                  <i className="fab fa-github"></i> Github SingIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
