import React from "react";

function ShimmerUI() {
  return (
    <>
      {/* Search + Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 mb-6 max-w-7xl mx-auto px-4">
        {/* Search Input */}
        <div className="px-4 py-6 bg-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 w-full sm:w-64"></div>

        {/* Search Button */}
        <button className="px-12 py-6 bg-gray-200 font-medium w-full sm:w-auto">
        </button>

        {/* Top Rated Button */}
        <button className="px-20 py-6 bg-gray-200 rounded-md font-medium w-full sm:w-auto">
        </button>
      </div>

      {/* Shimmer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-64 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
}

export default ShimmerUI;
