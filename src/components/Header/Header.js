import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="header-logo">
            Golden Shoe
          </Link>
        </h1>
        <nav className="header-links">
          <ul className="gender">
            <li>
              <Link to="/womens">Womens</Link>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/unisex">Unisex</Link>
            </li>
          </ul>
          <ul className="right-section">
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
