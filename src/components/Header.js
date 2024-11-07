import React from "react";
import logo from "../../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About-Us</a>
          </li>
          <li>
            <a href="/">Contact-Us</a>
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
