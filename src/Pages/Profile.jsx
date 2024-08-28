import React, { useEffect, useState } from 'react'
import Blank from '../components/Common/Blank'
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "./Login_signup/firebase.js";
import { setDoc, doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null)
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user)
      await setUserDetails(user)
      const docRef = doc(db, "Users", user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      }
      else {
        console.log("user is not loggedIn")
      }
    })
  };
  useEffect(() => {
    fetchUserData();
  }, [])

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login"
      console.log("user is logged out successfully")
    }
    catch (error) {
      console.log("error logging out", error.message)
    }
  }
  return (
    <div>
      <Blank />
      {userDetails ? (
        <>
          <h1>
            Welcome to {userDetails.firstName ? userDetails.firstName : userDetails.displayName}
          </h1>
          <div>
            <img src={userDetails.photoURL}/>
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
  )
}

export default Profile