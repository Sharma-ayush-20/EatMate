import React, { useContext } from "react";
import { IMAGE_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  console.log(resData)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { theme } = useContext(UserContext);

  return (
<div
  className={`
    rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col
    ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-100"}
  `}
>
  {/* Restaurant Image */}
  <img
    className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-105"
    src={IMAGE_URL + cloudinaryImageId}
    alt={name}
  />

  {/* Restaurant Info */}
  <h3 className="text-lg font-semibold mb-1">{name}</h3>
  <h4 className={`text-sm mb-2 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
    {cuisines.join(", ")}
  </h4>

  <div className="flex items-center justify-between text-sm mb-2">
    <span
      className={`
        px-2 py-1 rounded font-medium
        ${theme === "light" ? "bg-green-100 text-green-600" : "bg-green-700 text-green-200"}
      `}
    >
      {avgRating} ★
    </span>
    <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
      ₹{Number(costForTwo.slice(1, 4))} for two
    </span>
  </div>

  <div className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
    {deliveryTime} min
  </div>
</div>

  );
};

export default RestaurantCard;
