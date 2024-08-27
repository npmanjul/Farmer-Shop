import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import About from './Pages/About'
import Error from "./Pages/Error";
// import Singleproduct from './Pages/Singleproduct';
import Navbar from "./components/Common/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/singleproduct/:id' element={<Singleproduct />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
