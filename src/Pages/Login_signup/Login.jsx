import React, { useState } from "react";
import Blank from "../../components/Common/Blank";
import "./Login.css";
import { Link } from "react-router-dom";
import { google } from "../../assets/image";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      // window.location.href = "/profile";
      navigate("/profile");
      toast.success("User logged in successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Login failed: " + error.message, {
        position: "bottom-center",
      });
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        toast.success("User logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Google login failed: " + error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Blank />
      <div className="login-wrapper">
        <div className="login-container">
          <h2 >Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email Address</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Enter your email address "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
          <div className="google-login-container" onClick={googleLogin}>
            <img src={google} alt="Google Login" />
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
      <ToastContainer />
    </>
  );
};

export default Login;
  