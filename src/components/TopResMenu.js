import React, { useContext } from "react";
import { IMAGE_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

function TopResMenu({ foodData }) {
  const { theme } = useContext(UserContext);
  const imageId = foodData?.imageId;

  return (
    <div
      className={`
        mb-5 w-32 sm:w-26 md:w-30 lg:w-36 overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl
        ${theme === "light" ? "bg-white" : "bg-gray-800"}
      `}
    >
      <img
        src={IMAGE_URL + imageId}
        alt={foodData?.name}
        className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover"
      />
      <div
        className={`
          p-3 text-center transition-colors duration-300
          ${theme === "light" ? "text-gray-700" : "text-gray-200"}
        `}
      >
        <h4 className="text-sm sm:text-base font-medium truncate">{foodData?.name}</h4>
      </div>
    </div>
  );
}

export default TopResMenu;
