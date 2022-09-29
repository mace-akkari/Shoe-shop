import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css";

import ClickOutside from "../ClickOutside";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <header>
      <nav className="header-links">
        <div className="header-logo">
          <Link to="/">MACE SHOES</Link>
        </div>
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
            <Link
              className="cart"
              to="/cart"
              onMouseEnter={(e) => {
                setIsShown(true);
              }}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <ClickOutside
        onClick={(e) => {
          setIsShown(false);
        }}
      >
        {isShown && <Cart />}
      </ClickOutside>
    </header>
  );
};

export default Header;
