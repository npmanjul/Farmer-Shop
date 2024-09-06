import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { menuLine, shoppingCart } from '../../../assets/image'

const Navbar = () => {
  const [displayNone, setdisplayNone] = useState("block");

  const hideBtn = (val) => {
    setdisplayNone(val);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
    setTimeout(() => {
      document.getElementById("menu_line").style.display = "none";
    }, 300);
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu_line").style.display = "block";
  };

  return (

    <div className="navbar-container bg-gradient-to-br from-green-50 to-yellow-50 ">
      <NavLink to="/"><div className="bg-logo bg-cover bg-center size-16 bg-green-50 rounded-full  border-2 border-emerald-500 z-50" />
      </NavLink>
      <div className="navigation-container">
        <div className="nav-container">
          <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
            Home
          </NavLink>

          <NavLink to="/gov_scheme" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
            Schemes
          </NavLink>


          <NavLink to="/cold_storage" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
            Cold Storage
          </NavLink>

          {/* Dropdown Menu */}
          <div className="dropdown-container">
            <NavLink
              to="/allproducts"
              activeClassName="active"
              className="nav-link dropdown-product"
              onClick={() => hideBtn("block")}
            >
              Product
            </NavLink>
            <div className="dropdown-menu">
              <NavLink to="/allproducts" className="dropdown-item">
                Seeds
              </NavLink>
              <NavLink to="/product/feature2" className="dropdown-item">
                Fertilizer
              </NavLink>
              <NavLink to="/product/feature3" className="dropdown-item">
                Equipments
              </NavLink>
            </div>
          </div>

          <NavLink to="/marketplace" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
            Market Place
          </NavLink>

          <div onClick={() => hideBtn("none")} style={{ display: displayNone }}>
            <Link to="/login" className="login-btn">
              <div className="nav-link-login">Login</div>
            </Link>
          </div>

          {/* <div className="cart-container">
            <div className="cart-logo">
              <img src={shoppingCart} alt="Cart" />
            </div>
            <div className="cart-count">10</div>
          </div> */}
        </div>

        <div className="menu-section">
          <button onClick={openNav} id="menu_line" className="p-4 rounded-lg bg-yellow-100 ">
            <img src={menuLine} alt="Menu" className="size-8" />
          </button>
        </div>

        <div className="Curtain_Menu">
          <div id="myNav" className="overlay">
            <div className="menu-top">

            </div>
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <div className="overlay-content">
              <div className="menu-content">
                <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => { hideBtn("block"), closeNav() }}>
                  Home
                </NavLink>

                <NavLink to="/about" activeClassName="active" className="nav-link" onClick={() => { hideBtn("block"), closeNav() }}>
                  About
                </NavLink>

                <div className="dropdown-container">
                  <NavLink
                    to="/product"
                    activeClassName="active"
                    className="dropdown-product"
                    onClick={() => {
                      hideBtn("block");
                      closeNav();
                    }}
                  >
                    Product
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink to="/product/feature1" className="dropdown-item">
                      Feature 1
                    </NavLink>
                    <NavLink to="/product/feature2" className="dropdown-item">
                      Feature 2
                    </NavLink>
                    <NavLink to="/product/feature3" className="dropdown-item">
                      Feature 3
                    </NavLink>
                  </div>
                </div>

                <NavLink
                  to="/marketplace"
                  activeClassName="active"
                  className="nav-link"
                  onClick={() => { { hideBtn("block"), closeNav() } }}
                >
                  Market Place
                </NavLink>
                <Link
                  to="/login"
                  className="nav-link-login"
                  onClick={() => { hideBtn("none"), closeNav() }}
                  style={{ display: displayNone }}
                >
                  <div className="login-btn">
                    Login
                  </div>
                </Link>

                <div className="cart-container">
                  <div className="cart-logo">
                    <img src={shoppingCart} alt="Cart" />
                  </div>
                  <div className="cart-count">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
