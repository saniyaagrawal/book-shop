import "./login.css";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    mobile_no:"",
    store_id:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/signup', formData)
      .then(() => alert('Registration complete'))
      .catch(err => {
        alert('Invalid registration');
        console.error(err);
      });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      handleSubmit(e)
    }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/home" />;
  // }
  const { name, email, password, password2, store_id, mobile_no } = formData;
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
                className="textbox"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="textbox"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile No."
                name="mobile_no"
                className="textbox"
                value={mobile_no}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="textbox"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                className="textbox"
                value={password2}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="integer"
                placeholder="Store Id"
                name="store_id"
                className="textbox"
                value={store_id}
                onChange={onChange}
              />
            </div>
            <Link to='/login'>
             <div className="btn btn-primary" onChange={onSubmit}>
               Register
               </div>
            </Link>
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
