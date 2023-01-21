import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sytles/Signup.css";

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const localSignup = localStorage.getItem("signup");

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      alert("Account Created");

      navigate("/login");
    } else {
      alert("Fill all the details");
    }
  };
  return (
    <div className="signup_box">

    <div className="signup_main_container">
      <h1>Register</h1>
      <div className="signup_container">
        <div className="input_space">
          <input type="text" placeholder="Enter Your Name" ref={name} />
        </div>
        <div className="input_space">
          <input type="email" placeholder="Enter Your Email" ref={email} />
        </div>
        <div className="input_space">
          <input type="password" placeholder="Enter password" ref={password} />
        </div>
        <button onClick={handleClick}>Sign Up</button>
      </div>
      <div className="login_link">
            Not a member? <Link to="/login">Login</Link>
        </div>
    </div>
    </div>
  );
};

export default Signup;
