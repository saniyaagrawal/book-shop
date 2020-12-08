import "./login.css";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert("Passwords do not match", "danger");
  //   } else {
  //     register({ name, email, password });
  //   }
  // };

  // if (isAuthenticated) {
  //   return <Redirect to="/home" />;
  // }
  const { name, email, password, password2 } = formData;
  return (
    <>
      <div className="background signup_page">
        <center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="large text-primary">
            <div class="largein head">Sign Up</div>
          </h1>
          <p className="lead">
            <i className="fas fa-user" />{" "}
            <div class="description">Create Your Account</div>
          </p>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                // value={name}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                // value={email}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                // value={password}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                // value={password2}
                // onChange={onChange}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <br></br>
          <p className="my-1">
            <div class="largein">Already have an account?</div>{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </center>
        </div>
    </>
  );
};
export default Signup;
