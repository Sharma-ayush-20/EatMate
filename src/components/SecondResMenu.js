import { IMAGE_URL } from "../utils/constants";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function SecondResMenu({ resData }) {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { theme } = useContext(UserContext);

  return (
    <div
      className={`
    rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col
    w-72 sm:w-72 md:w-72 lg:w-72 flex-shrink-0
    ${
      theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-100"
    }
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
      <h4
        className={`text-sm mb-2 transition-colors duration-300 ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {cuisines.join(", ")}
      </h4>

      <div className="flex items-center justify-between text-sm mb-2">
        <span
          className={`
        px-2 py-1 rounded font-medium transition-colors duration-300
        ${
          theme === "light"
            ? "bg-green-100 text-green-600"
            : "bg-green-700 text-green-200"
        }
      `}
        >
          {avgRating} ★
        </span>
        <span
          className={`px-4 transition-colors duration-300 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          ₹{Number(costForTwo.slice(1, 4))} for two
        </span>
      </div>

      <div
        className={`text-sm transition-colors duration-300 ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {deliveryTime} min
      </div>
    </div>
  );
}

export default SecondResMenu;
