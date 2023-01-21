import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sytles/Login.css"

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const handleClick = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      // console.log(name.current.value,email.current.value,password.current.value)
      navigate("/");
    } else {
      alert("fill correct  details");
    }
  };

  return (
    <div className="signup_box">
        <div className="signup_main_container">
        <h1>Login</h1>
      <div className="signup_container">
        <div className="input_space">
          <input type="email" placeholder="email" ref={email} />
        </div>
        <div className="input_space">
          <input type="password" placeholder="password" ref={password} />
        </div>
        <button className="praButton" onClick={handleClick}>Login</button>
        <div className="login_link">
            Already a member? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
        </div>
    </div>
  );
}
export default Login;
