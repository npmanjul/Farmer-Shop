import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect from react
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import About from './Pages/About';
import Error from "./Pages/Error";
// import Singleproduct from './Pages/Singleproduct';
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer/Footer";
import Login from "./Pages/Login_signup/Login";
import Signup from "./Pages/Login_signup/Signup";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the pathname changes
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Place ScrollToTop outside of Routes */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path='/singleproduct/:id' element={<Singleproduct />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
