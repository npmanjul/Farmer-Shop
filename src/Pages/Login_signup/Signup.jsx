import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Blank from "../../components/Common/Blank";

const Signup = () => {
  return (
    <>
      <Blank />
      <div className="signup-wrapper">
        <div class="signup-container">
          <h2>Sign Up</h2>
          <form action="/signup" method="post">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <label for="password">Conform Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <input type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
