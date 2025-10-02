import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems, clearCart } from "../utils/cartSlice";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

function Cartpage() {
  const { theme } = useContext(UserContext);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  const dispatch = useDispatch();

  //add item
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  //remove item
  const handleRemoveItems = (item) => {
    dispatch(removeItems(item));
  };

  //clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length !== 0 ? (
        <button
          onClick={handleClearCart}
          className={`${
            theme === "dark" ? "bg-purple-300 text-black" : "bg-orange-400"
          } px-4 py-2 rounded mb-3 cursor-pointer font-bold`}
        >
          Clear Cart
        </button>
      ) : (
        ""
      )}

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9"
            />
          </svg>
          <p
            className={`text-lg font-medium ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Your cart is empty
          </p>
          <span
            className={`text-sm mt-1 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Start adding some delicious items 🍔🍕
          </span>
          <button
            onClick={() => navigate("/")}
            className={`text-md mt-4 px-4 py-2 cursor-pointer rounded font-bold ${
              theme === "dark" ? "bg-orange-400 text-black" : "bg-orange-400"
            }`}
          >
            See Restaurant
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((cart, index) => {
            let {
              name,
              description,
              imageId,
              price,
              defaultPrice,
              ratings,
              ribbon,
              isVeg,
              isBestseller,
            } = cart?.card?.info;

            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border
              ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-gray-50 border-gray-200 text-gray-900"
              }`}
              >
                {/* Image */}
                <img
                  src={"https://media-assets.swiggy.com/" + imageId}
                  alt={name}
                  className="w-28 h-24 object-cover rounded-xl"
                />

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    {isVeg ? (
                      <span className="text-green-600 text-xs font-bold border border-green-600 px-1 rounded">
                        VEG
                      </span>
                    ) : (
                      <span className="text-red-600 text-xs font-bold border border-red-600 px-1 rounded">
                        NON-VEG
                      </span>
                    )}
                    {isBestseller && (
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {ribbon?.text || "Bestseller"}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mt-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {description}
                  </p>

                  {/* Price & Ratings */}
                  <div className="flex items-center gap-4 mt-2">
                    <p className="font-semibold text-orange-600">
                      ₹{price / 100 || defaultPrice / 100}
                    </p>
                    {ratings?.aggregatedRating?.rating && (
                      <span className="text-sm text-yellow-600 font-medium">
                        ⭐ {ratings?.aggregatedRating?.rating} (
                        {ratings?.aggregatedRating?.ratingCountV2})
                      </span>
                    )}
                  </div>

                  {/* Add & Remove */}
                  <div
                        className={`flex items-center justify-between w-28 px-3 py-2 rounded-lg shadow-md transition-colors duration-300
                          ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
                      >
                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItems(cart)}
                          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg 
                            transition-colors duration-200
                            ${
                              theme === "dark"
                                ? "bg-gray-600 hover:bg-gray-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                            }`}
                        >
                          -
                        </button>

                        {/* Quantity */}
                        <span
                          className={`font-semibold text-lg ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cart.quantity}
                        </span>

                        {/* Add Button */}
                        <button
                          onClick={() => handleAddItems(cart)}
                          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg
                            transition-colors duration-200
                            ${
                              theme === "dark"
                                ? "bg-green-600 hover:bg-green-500 text-white"
                                : "bg-green-500 hover:bg-green-400 text-white"
                            }`}
                        >
                          +
                        </button>
                      </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cartpage;
