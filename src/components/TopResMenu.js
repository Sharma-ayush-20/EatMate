import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function TopResMenu(props) {
  const imageId = props?.foodData?.imageId;
  const { theme } = useContext(UserContext);

  return (
    <div className="w-30 sm:w-30 md:w-35 overflow-hidden">
      <img
        src={IMAGE_URL + imageId}
        alt="food"
        className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-lg shadow-md"
      />
      <div
        className={`
      p-2 text-center transition-colors duration-500
      ${
        theme === "light"
          ? "bg-white text-gray-700"
          : "bg-gray-800 text-gray-200"
      }
    `}
      >
        <h4 className="text-sm font-medium">{props?.foodData?.name}</h4>
      </div>
    </div>
  );
}

export default TopResMenu;
