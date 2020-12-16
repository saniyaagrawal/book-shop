import React,{useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import "./login.css";

const Login = () => {
  // const [store_id, setStore_id]=useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hi')
    axios
      .post('http://localhost:3001/login', formData)
      .then((response) => {
        localStorage.setItem("store_id",response.data[0].store_id)
        alert('You are logged in')
      })
      .catch(err => {
        alert('Invalid Login');
      });
  };
  
  return (
    <>
      <div className="background login_page">
        <center>
        <div className="login-page">
          <h1 className="large head">
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
                className="textbox"
                value={email}
                onChange={onChange}
                required
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
                minLength="6"
                required
              />
            </div>
            <Link to='/'>
             <div className="btn btn-primary" onClick={handleSubmit}>
               Login
               </div>
            </Link>
          </form>
          <br></br>
          <br></br>
          <p className="mb-1">
            <div class="largein"> Don't have an account?</div>{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        </center>
      </div>
    </>
  );
};
export default Login;
