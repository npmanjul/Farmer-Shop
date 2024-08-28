// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4aCbwTYA0iVmMAegF4zElxnfp7upkbc0",
  authDomain: "farmer-shop-fb805.firebaseapp.com",
  projectId: "farmer-shop-fb805",
  storageBucket: "farmer-shop-fb805.appspot.com",
  messagingSenderId: "492570442099",
  appId: "1:492570442099:web:f656365c5f9e701a522d06",
  measurementId: "G-3T7ZPMGE21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const db=getFirestore(app);
export default app;