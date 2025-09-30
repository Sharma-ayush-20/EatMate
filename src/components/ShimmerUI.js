import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function ShimmerUI() {
  const { theme } = useContext(UserContext);

  // Dynamic background classes based on theme
  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-200";

  return (
    <>
      {/* Search + Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 mb-6 max-w-7xl mx-auto px-4">
        {/* Search Input */}
        <div className={`${bgClass} px-4 py-6 rounded-l-md w-full sm:w-64 animate-pulse`}></div>

        {/* Search Button */}
        <button className={`${bgClass} px-12 py-6 w-full sm:w-auto rounded-md animate-pulse`}></button>

        {/* Top Rated Button */}
        <button className={`${bgClass} px-20 py-6 rounded-md w-full sm:w-auto animate-pulse`}></button>
      </div>

      {/* Shimmer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`${bgClass} h-64 rounded-lg animate-pulse`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default ShimmerUI;
