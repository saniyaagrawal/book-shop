import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  return (
    <>
      <center>
        <div className="login-page">
          <h1 className="large text-primary">
            <div class="largein">Sign In</div>
          </h1>
          <p className="lead">
            <i className="fas fa-user" />
            <div class="description"> Sign Into Your Account</div>
          </p>
          <form className="form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                // value={email}
                // onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                // value={password}
                // onChange={onChange}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <br></br>
          <br></br>
          <p className="my-1">
            <div class="largein"> Don't have an account?</div>{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </center>
    </>
  );
};
export default Login;
