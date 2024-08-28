import React, { useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { logo, menuLine, shoppingCart } from '../../assets/image'


const Navbar = () => {

  const [displayNone, setdisplayNone] = useState("block")

  const hideBtn = (val) => {
    setdisplayNone(val)
  }

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    setTimeout(() => {
      document.getElementById("menu_line").style.display = "none";
    }, 300);
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu_line").style.display = "block";
    // console.log("ok");
  }

  return (
    <div className="navbar-container">
      <div className="nav-icon">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navigation-container">
        <div className="nav-container">
          <div >
            <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/about" activeClassName="active" className="nav-link" onClick={() => hideBtn("block")}>
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/product"
              activeClassName="active"
              className="nav-link"
              onClick={() => hideBtn("block")}
            >
              Product
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
              onClick={() => hideBtn("block")}
            >
              Contact
            </NavLink>
          </div>
          <div onClick={() => hideBtn("none")} style={{ display: displayNone }}>
            <Link
              to="/login"
              className="login-btn"
            >
              <div className="nav-link-login">
                Login
              </div>
            </Link>
          </div>
          <div className="cart-container">
            <div className="cart-logo">
              <img src={shoppingCart} alt="Cart" />
            </div>
            <div className="cart-count">10</div>
          </div>
        </div>

        <div className="menu-section">
          <button onClick={openNav} id="menu_line">
            <img src={menuLine} />
          </button>
        </div>

        <div class="Curtain_Menu">
          <div id="myNav" class="overlay">
            <div className="menu-top">
              <img src={logo} alt="Logo" />
            </div>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
              &times;
            </a>

            <div class="overlay-content">
              <div className="menu-content">
                <div>
                  <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => { hideBtn("block"), closeNav() }}>
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link"
                    onClick={() => { hideBtn("block"), closeNav() }}
                  >
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/product"
                    activeClassName="active"
                    className="nav-link"
                    onClick={() => { hideBtn("block"), closeNav() }}
                  >
                    Product
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="nav-link"
                    onClick={() => { hideBtn("block"), closeNav() }}
                  >
                    Contact
                  </NavLink>
                </div>
                <Link
                  to="/login"
                  className="nav-link-login"
                  onClick={() => { hideBtn("none"), closeNav() }} style={{ display: displayNone }}
                >
                  <div className="login-btn" >
                    Login
                  </div>
                </Link>
                <div className="cart-container">
                  <div className="cart-logo">
                    <img
                      src={shoppingCart}
                      alt="Cart"
                    />
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
