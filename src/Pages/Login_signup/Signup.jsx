import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { google } from "../../assets/image";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      const user = auth.currentUser;
      console.log(user)
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: name,
        });

      }
      console.log("user register succesfully")
      toast.success("User Registered successfully !!", {
        position: "top-center"
      })

    } catch (error) {
      // setError(error.message);
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center"
      })
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
        // window.location.href = "/profile";
        navigate('/profile');

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
      <div className="signup-wrapper">
        <ToastContainer />
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <input type="submit" value="Sign Up" />
          </form>
          <div className="google-login-container" onClick={googleLogin}>
            <img src={google} alt="Google Login" />
            <div className="google-login-txt">Continue with Google</div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
