import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userState, setUserState, theme, toggleTheme } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setUserState(userState === "Login" ? "Logout" : "Login");
  };

  return (
    <header
      className={`shadow-md sticky top-0 z-50 transition-all duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 cursor-pointer relative group">
          EatMate
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation */}
        <ul
          className={`flex flex-col sm:flex-row sm:static absolute sm:top-auto sm:left-auto top-full left-0 w-full sm:w-auto 
          ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-700"}
          ${menuOpen ? "flex" : "hidden"} sm:flex 
          items-center gap-4 sm:gap-6 font-medium text-lg shadow sm:shadow-none p-4 sm:p-0`}
        >
          {/* Online Status */}
          <li>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                onlineStatus
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
          </li>

          {/* Links */}
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">Cart</li>

          {/* Login/Logout Button */}
          <li
            onClick={handleLogin}
            className={`px-5 py-2 rounded cursor-pointer transition-colors ${
              theme === "light"
                ? "bg-gray-300 hover:bg-gray-400 text-black"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {userState}
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full shadow-lg border transition-all duration-500 ease-in-out ${
                theme === "light"
                  ? "bg-gray-100 text-yellow-500 hover:bg-gray-200"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
