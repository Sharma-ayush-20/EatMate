import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  let [listAllRestaurant, setListAllRestaurant] = useState([]); //original Copy of data for restaurant
  let [filteredRestaurant, setFilteredRestaurant] = useState([]); //filter restaurant by search
  let [searchText, setSearchText] = useState("");

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

    // console.log(json)

    setListAllRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listAllRestaurant.length === 0) {
    return (
      // <div className="loader-container">
      //   <span className="loading"></span>
      // </div>

      <ShimmerUI />
    );
  }

  return (
    <div className="body">

      {/* search button  */}
      <input
        type="text"
        placeholder="search your menu"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          const filteredCard = listAllRestaurant.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredCard); // [copy of data] => filter data aayega
        }}
      >
        Search  
      </button>

      {/* top rated restaurant  */}
      <button
        className="filter-btn"
        onClick={() => {
          const TopRated = listAllRestaurant.filter((restaurant) => {
            return restaurant?.info?.avgRating > 4.5;
          });
          setFilteredRestaurant(TopRated);
        }}
      >
        Top rated restaurant
      </button>

      <div className="res-container">
        {
        filteredRestaurant.length === 0 ?
        <h1>No Restaurant Found</h1> :
        filteredRestaurant.map((restaurant, index) => {
          // console.log(restaurant);
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
      
    </div>
  );
};

export default Body;
