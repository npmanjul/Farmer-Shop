import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useEffect from react
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Gov_scheme from './Pages/Government_scheme';
import Error from "./Pages/Error";
// import Singleproduct from './Pages/Singleproduct';
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import Signup from "./Pages/Login_signup/Signup";
import Profile from "./Pages/Profile";
import { auth } from "./Pages/Login_signup/firebase";
import Blank from "./components/Common/Blank";
import Card from "./components/Farm_Store/Card";
import ProductDescription from "./components/Farm_Store/ProductDescription/ProductDescription";
import Market_place from "./Pages/Market_place";
import CropSellerForm from "./Pages/CropSellerForm";
import BuyerRequirementForm from "./Pages/BuyerRequirementForm";
import Cold_storage from './Pages/Cold_storage'
import Login from "./Pages/Login_signup/Login";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Blank />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gov_scheme" element={<Gov_scheme />} />
          <Route path="/product" element={<Product />} />
          <Route path="/card/:id" element={<ProductDescription />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cropSellerForm" element={<CropSellerForm />} />
          <Route path="/buyerRequirementForm" element={<BuyerRequirementForm />} />
          <Route path="/marketplace" element={<Market_place />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cold_storage" element={<Cold_storage/>}/>

          {/* <Route path='/singleproduct/:id' element={<Singleproduct />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
