import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import TopResMenu from "./TopResMenu";
import SecondResMenu from "./SecondResMenu";

const Body = () => {
  let [listAllRestaurant, setListAllRestaurant] = useState([]); //original Copy of data for restaurant
  let [filteredRestaurant, setFilteredRestaurant] = useState([]); //filter restaurant by search
  let [searchText, setSearchText] = useState("");
  let [topFoods, setTopFoods] = useState([]); //top food details in array
  let [topFoodTitle, setTopFoodTitle] = useState(""); //top food detail title
  let [secondDetails, setSecondDetails] = useState([]); //second food details in array
  let [secondDetailsTitle, setSecondDetailsTitle] = useState(""); //second food detail title
  let [thirdDetailsTitle, setThirdDetailsTitle] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  // to solve the cors issue without the browser extension we have to use the website corsproxy.io we solve the cors issue
  // so to use this we have to append this line https://corsproxy.io/?Your-api by using this cors issue is resolved without
  // using browser extension but now this not working

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1090805&lng=72.8720171&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[0]?.card?.card);

    setListAllRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopFoods(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setTopFoodTitle(json?.data?.cards[0]?.card?.card?.header?.title);
    setSecondDetails(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSecondDetailsTitle(json?.data?.cards[1]?.card?.card?.header?.title);
    setThirdDetailsTitle(json?.data?.cards[2]?.card?.card?.title);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-xl font-bold text-red-600 text-center mt-10">
        Oops!! Your internet is not connected.
      </h1>
    );
  }

  //  if (listAllRestaurant.length === 0) {
  //   return (
  //     // <div className="loader-container">
  //     //   <span className="loading"></span>
  //     // </div>

  //     <ShimmerUI />
  //   );
  // }

  return listAllRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="">
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search your menu"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 w-64"
        />

        {/* Search Button */}
        <button
          onClick={() => {
            const filteredCard = listAllRestaurant.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredCard);
          }}
          className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors font-medium"
        >
          Search
        </button>

        {/* Top Rated Button */}
        <button
          onClick={() => {
            const TopRated = listAllRestaurant.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.5
            );
            setFilteredRestaurant(TopRated);
          }}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
        >
          Top Rated Restaurants
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 ml-4 sm:ml-12 mt-6 font-extrabold text-gray-700">
        {topFoodTitle}
      </h2>
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-10 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {topFoods.map((food) => (
          <Link key={food?.id} to={"/"}>
            <TopResMenu foodData={food} />
          </Link>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl mb-4 ml-4 sm:ml-12 font-extrabold text-gray-700">
        {secondDetailsTitle}
      </h2>

      <div className="shadow-md flex gap-6 px-4 sm:px-10 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-smooth">
        {filteredRestaurant.length === 0 ? (
          <h1 className="text-xl font-semibold text-gray-500 text-center w-full">
            No Restaurant Found
          </h1>
        ) : (
          secondDetails.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
              className="flex-shrink-0"
            >
              <SecondResMenu resData={restaurant} />
            </Link>
          ))
        )}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl ml-4 sm:ml-12 mt-8 font-extrabold text-gray-700">
        {thirdDetailsTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {filteredRestaurant.length === 0 ? (
          <h1 className="text-xl font-semibold text-gray-500 col-span-full text-center">
            No Restaurant Found
          </h1>
        ) : (
          filteredRestaurant.map((restaurant, index) => {
            // console.log(restaurant);
            return (
              <Link
                key={restaurant.info.id}
                to={`restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
