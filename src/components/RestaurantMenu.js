import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import "./ResMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const [firstTitleCard, setFirstTitleCard] = useState([]);
  const [secondTitleCard, setSecondTitleCard] = useState([]);
  const [thirdTitleCard, setThirdTitleCard] = useState([]);
  const { resid } = useParams();
  const [showDetailsFirst, setShowDetailsFirst] = useState(false);
  const [showDetailsSecond, setShowDetailsSecond] = useState(false);
  const [showDetailsThird, setShowDetailsThird] = useState(false);

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
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 ">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{name}</h1>

        <div className="flex items-center gap-6 mt-2 text-gray-700 text-sm">
          <span className="flex items-center gap-1 font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-lg">
            ⭐ {avgRating} ({totalRatingsString})
          </span>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded-lg">
            {costForTwoMessage}
          </span>
        </div>

        <p className="text-gray-500 mt-2">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-500 mt-1">
          Outlet <span className="font-semibold text-gray-800">{areaName}</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          {minDeliveryTime} - {maxDeliveryTime} mins
        </p>
      </div>

      {/* Deals Section */}
      <section className="my-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Deals for You</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100">
          {offers.slice(0, 4).map((offer, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col gap-2"
            >
              <h6 className="text-orange-500 font-bold text-xs uppercase tracking-wide">
                {offer.info.offerTag || ""}
              </h6>
              <h5 className="font-semibold text-gray-800 text-lg">
                {offer.info.header}
              </h5>
              <p className="text-gray-500 text-sm line-clamp-3">
                {offer.info.description}
              </p>
              <button className="mt-auto bg-orange-500 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                Grab Deal
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <h3 className="text-xl font-bold mb-6 text-center space-x-4 font-serif">
        M&nbsp;E&nbsp;N&nbsp;U
      </h3>

      {/* First Title */}
      <div className="mb-0">
        <h3
          onClick={() => setShowDetailsFirst(!showDetailsFirst)}
          className="text-2xl font-bold text-gray-900 bg-gray-100 mb-6 cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out"
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
              let { name, defaultPrice, description, imageId } =
                item?.card?.info;
              let { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {name}
                    </h3>
                    <h5 className="text-sm font-medium text-gray-700 mt-1">
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
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
                    <p className="text-xs text-gray-400 mt-1">Customisable</p>
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
          className="text-2xl font-bold text-gray-900 mb-6 bg-gray-100 cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out"
        >
          {secondTitle} ({secondTitleCard.length})
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDetailsSecond ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {secondTitleCard.map((item, index) => {
              let { name, defaultPrice, description, imageId } =
                item?.card?.info;
              let { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {name}
                    </h3>
                    <h5 className="text-sm font-medium text-gray-700 mt-1">
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
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
                    <p className="text-xs text-gray-400 mt-1">Customisable</p>
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
          className="text-2xl font-bold text-gray-900 mb-6 bg-gray-100 cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out"
        >
          {thirdTitle} ({thirdTitleCard.length})
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDetailsThird ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {thirdTitleCard.map((item, index) => {
              let { name, defaultPrice, description, imageId } =
                item?.card?.info;
              let { rating } =
                item?.card?.info?.ratings?.aggregatedRating || "N/A";

              return (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  {/* Text Info */}
                  <div className="w-3/4 pr-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {name}
                    </h3>
                    <h5 className="text-sm font-medium text-gray-700 mt-1">
                      ₹{defaultPrice / 100}
                    </h5>
                    <p className="text-yellow-500 font-medium mt-1">
                      ⭐ {rating} ({totalRatingsString || 0})
                    </p>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
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
                    <p className="text-xs text-gray-400 mt-1">Customisable</p>
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
