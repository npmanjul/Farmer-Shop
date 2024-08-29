import React, { useEffect, useState } from 'react';
import Blank from '../components/Common/Blank';
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "./Login_signup/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check if a user is signed in
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            console.log(user);
            // Fetch user data from Firestore
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
              console.log(docSnap.data());
            } else {
              console.log("User document not found");
            }
          } else {
            console.log("No user is logged in");
          }
        });
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // window.location.href = "/login";
      navigate('/login');
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };

  return (
    <div>
      <Blank />
      {userDetails ? (
        <>
          <h1>
            Welcome to {userDetails.firstName || userDetails.displayName}
          </h1>
          <div>
            <img src={userDetails.photoURL} alt="User Avatar" />
          </div>
          <div>
            <h3>EMAIL: {userDetails.email}</h3>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
