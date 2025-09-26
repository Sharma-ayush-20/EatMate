import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      {/* Restaurant Image */}
      <img
        className="w-full h-40 object-cover rounded-md mb-4"
        src={IMAGE_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Restaurant Info */}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <h4 className="text-sm text-gray-500 mb-2">{cuisines.join(", ")}</h4>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
          {avgRating} ★
        </span>
        <span className="px-4">₹{Number(costForTwo.slice(1, 4))} for two</span>
      </div>

      <div className="text-sm text-gray-500">{deliveryTime} min</div>
    </div>
  );
};

export default RestaurantCard;
