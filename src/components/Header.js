import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="head">
        <div className="logo">
          <img src = {LOGO_URL} />
        </div>

        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
