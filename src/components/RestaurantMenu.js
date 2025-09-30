import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import "./ResMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function RestaurantMenu() {
  const [firstTitleCard, setFirstTitleCard] = useState([]);
  const [secondTitleCard, setSecondTitleCard] = useState([]);
  const [thirdTitleCard, setThirdTitleCard] = useState([]);
  const { resid } = useParams();
  const [showDetailsFirst, setShowDetailsFirst] = useState(false);
  const [showDetailsSecond, setShowDetailsSecond] = useState(false);
  const [showDetailsThird, setShowDetailsThird] = useState(false);
  const { theme } = useContext(UserContext);

  const resInfo = useRestaurantMenu(resid);

  useEffect(() => {
    if (resInfo) {
      const firstTitleCardData =
        resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards || [];
      setFirstTitleCard(firstTitleCardData);

      const secondTitleCardData =
        resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || [];
      setSecondTitleCard(secondTitleCardData);

      const thirdTitleCardData =
        resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.itemCards || [];
      setThirdTitleCard(thirdTitleCardData);
    }
  }, [resInfo]);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info.sla;

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  const firstTitle =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.title;
  const secondTitle =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title;
  const thirdTitle =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.title;

  // console.log(offers);

  // const recommended = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
  // setRecommendedCard(recommended)

  // api chaining
  // Resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name

  // image
  const imageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return (
    <div className={`max-w-5xl mx-auto px-4 py-6 ${theme === "dark" ? "bg-gray-900" : ""}`}>
      {/* Restaurant Info */}
      <div
        className={`${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-800 text-gray-200"
        } shadow-lg rounded-2xl p-6 mb-8 transition-colors duration-500`}
      >
        <h1 className="text-3xl font-extrabold mb-3">{name}</h1>

        <div className="flex items-center gap-6 mt-2 text-sm">
          <span
            className={`${
              theme === "light"
                ? "bg-green-100 text-green-800"
                : "bg-green-700 text-green-200"
            } flex items-center gap-1 font-semibold px-2 py-1 rounded-lg transition-colors duration-500`}
          >
            ⭐ {avgRating} ({totalRatingsString})
          </span>
          <span
            className={`${
              theme === "light"
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-700 text-gray-200"
            } font-semibold px-2 py-1 rounded-lg transition-colors duration-500`}
          >
            {costForTwoMessage}
          </span>
        </div>

        <p
          className={`${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          } mt-2 transition-colors duration-500`}
        >
          {cuisines?.join(", ")}
        </p>
        <p
          className={`${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          } text-sm mt-1 transition-colors duration-500`}
        >
          Outlet{" "}
          <span
            className={`${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            } font-semibold transition-colors duration-500`}
          >
            {areaName}
          </span>
        </p>
        <p
          className={`${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          } text-sm mt-1 transition-colors duration-500`}
        >
          {minDeliveryTime} - {maxDeliveryTime} mins
        </p>
      </div>

      {/* Deals Section */}
      <section className="my-8">
        <h3
          className={`${
            theme === "light" ? "text-gray-900" : "text-gray-200"
          } text-2xl font-bold mb-6 transition-colors duration-500`}
        >
          Deals for You
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100">
          {offers.slice(0, 4).map((offer, index) => (
            <div
              key={index}
              className={`${
                theme === "light"
                  ? "bg-white border-gray-200 text-gray-900"
                  : "bg-gray-800 border-gray-700 text-gray-200"
              } min-w-[250px] border rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col gap-2 transition-colors duration-500`}
            >
              <h6 className="text-orange-500 font-bold text-xs uppercase tracking-wide">
                {offer.info.offerTag || ""}
              </h6>
              <h5 className="font-semibold text-lg">{offer.info.header}</h5>
              <p className="text-sm line-clamp-3">{offer.info.description}</p>
              <button className="mt-auto bg-orange-500 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                Grab Deal
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <h3
        className={`text-xl font-bold mb-6 text-center space-x-4 font-serif transition-colors duration-500 ${
          theme === "light" ? "text-gray-900" : "text-gray-200"
        }`}
      >
        M&nbsp;E&nbsp;N&nbsp;U
      </h3>

      {/* First Title */}
      <div className="mb-0">
        <h3
          onClick={() => setShowDetailsFirst(!showDetailsFirst)}
          className={`text-2xl font-bold mb-6 cursor-pointer px-4 py-2 rounded transition-all duration-200 ease-in-out ${
            theme === "light"
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {firstTitle} ({firstTitleCard.length})
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDetailsFirst ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {firstTitleCard.map((item, index) => {
              const { name, defaultPrice, description, imageId } =
                item?.card?.info;
              const { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className={`flex justify-between items-start border-b pb-6 rounded-lg transition-colors duration-200 ${
                    theme === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700"
                  }`}
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3
                      className={`font-semibold text-lg ${
                        theme === "light" ? "text-gray-900" : "text-gray-200"
                      }`}
                    >
                      {name}
                    </h3>
                    <h5
                      className={`text-sm font-medium mt-1 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p
                      className={`text-sm mt-2 line-clamp-2 ${
                        theme === "light" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Image + Button */}
                  <div className="flex flex-col items-center w-1/4">
                    <img
                      src={imageUrl + imageId}
                      alt={name}
                      className="w-28 h-28 object-cover rounded-xl shadow-md mb-3"
                    />
                    <button className="px-6 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      ADD
                    </button>
                    <p
                      className={`text-xs mt-1 ${
                        theme === "light" ? "text-gray-400" : "text-gray-300"
                      }`}
                    >
                      Customisable
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Second Title */}
      <div className="mb-0">
        <h3
          onClick={() => setShowDetailsSecond(!showDetailsSecond)}
          className={`text-2xl font-bold mb-6 cursor-pointer px-4 py-2 rounded transition-all duration-200 ease-in-out ${
            theme === "light"
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {secondTitle} ({secondTitleCard.length})
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDetailsSecond
              ? "opacity-100 max-h-[2000px]"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {secondTitleCard.map((item, index) => {
              const { name, defaultPrice, description, imageId } =
                item?.card?.info;
              const { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className={`flex justify-between items-start border-b pb-6 rounded-lg transition-colors duration-200 ${
                    theme === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700"
                  }`}
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3
                      className={`font-semibold text-lg ${
                        theme === "light" ? "text-gray-900" : "text-gray-200"
                      }`}
                    >
                      {name}
                    </h3>
                    <h5
                      className={`text-sm font-medium mt-1 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p
                      className={`text-sm mt-2 line-clamp-2 ${
                        theme === "light" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Image + Button */}
                  <div className="flex flex-col items-center w-1/4">
                    <img
                      src={imageUrl + imageId}
                      alt={name}
                      className="w-28 h-28 object-cover rounded-xl shadow-md mb-3"
                    />
                    <button className="px-6 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      ADD
                    </button>
                    <p
                      className={`text-xs mt-1 ${
                        theme === "light" ? "text-gray-400" : "text-gray-300"
                      }`}
                    >
                      Customisable
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Third Title */}
      <div className="mb-0">
        <h3
          onClick={() => setShowDetailsThird(!showDetailsThird)}
          className={`text-2xl font-bold mb-6 cursor-pointer px-4 py-2 rounded transition-all duration-200 ease-in-out ${
            theme === "light"
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {thirdTitle} ({thirdTitleCard.length})
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDetailsThird
              ? "opacity-100 max-h-[2000px]"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {thirdTitleCard.map((item, index) => {
              const { name, defaultPrice, description, imageId } =
                item?.card?.info;
              const { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className={`flex justify-between items-start border-b pb-6 rounded-lg transition-colors duration-200 ${
                    theme === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700"
                  }`}
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3
                      className={`font-semibold text-lg ${
                        theme === "light" ? "text-gray-900" : "text-gray-200"
                      }`}
                    >
                      {name}
                    </h3>
                    <h5
                      className={`text-sm font-medium mt-1 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p
                      className={`text-sm mt-2 line-clamp-2 ${
                        theme === "light" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Image + Button */}
                  <div className="flex flex-col items-center w-1/4">
                    <img
                      src={imageUrl + imageId}
                      alt={name}
                      className="w-28 h-28 object-cover rounded-xl shadow-md mb-3"
                    />
                    <button className="px-6 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      ADD
                    </button>
                    <p
                      className={`text-xs mt-1 ${
                        theme === "light" ? "text-gray-400" : "text-gray-300"
                      }`}
                    >
                      Customisable
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
