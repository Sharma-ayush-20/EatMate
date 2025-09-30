import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { UserContext } from '../utils/UserContext'

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {userState, setUserState} = useContext(UserContext)

  const handleLogin = () => {
    if(userState === "Login"){
      setUserState("Logout")
    }else{
      setUserState("Login")
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-orange-500 relative cursor-pointer group">
          EatMate
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium text-xl">
          <li className="px-3">
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
          <li className="px-3 py-2 rounded hover:text-orange-500 transition-colors">
            <Link to="/" className="w-full h-full block">
              Home
            </Link>
          </li>
          <li className="px-3 py-2 rounded hover:text-orange-500 transition-colors">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-3 py-2 rounded hover:text-orange-500 transition-colors">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3 py-2 rounded hover:text-orange-500 transition-colors cursor-pointer">
            Cart
          </li>
          <li onClick={handleLogin} className="px-5 py-2 w-25 text-center rounded hover:text-orange-500 bg-gray-400 transition-colors cursor-pointer">
            {userState}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
