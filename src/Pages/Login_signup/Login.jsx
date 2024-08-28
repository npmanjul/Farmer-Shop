import React from "react";
import Blank from "../../components/Common/Blank";
import "./Login.css";
import { Link } from "react-router-dom";
import { google } from "../../assets/image";

const Login = () => {
  return (
    <>
      <Blank />
      <div className="login-wrapper">
        <div class="login-container">
          <h2>Login</h2>
          <form action="#" method="post">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username " required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" required />

            <button type="submit">Login</button>
          </form>
          <div className="google-login-container">
            <img src={google} />
            <div className="google-login-txt">Continue with Google</div>
          </div>
          <div className="login-signup-link">
            Don’t you have an account?{" "}
            <Link to="/signup" className="login-signup-page-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
