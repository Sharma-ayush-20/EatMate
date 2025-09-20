import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="head">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link
                to="/"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                Contact us
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
