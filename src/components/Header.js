import React from "react";
import logo from "../../images/Logo.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="Header">
      <a href="/">
        <img src={logo}></img>
      </a>
      <div className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <a href="/" className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
          <li>
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
