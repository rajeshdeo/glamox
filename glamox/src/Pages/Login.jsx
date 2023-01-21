import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../ReduxStore/Authentication/action";
// import { login } from "../Redux/Authentication/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = () => {
    let userData = { email, password };
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
    });
    // redirect the user once the login is successfull
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginHandler}>Log In</button>
    </div>
  );
};
