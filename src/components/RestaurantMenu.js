import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import "./ResMenu.css";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const [firstTitleCard, setFirstTitleCard] = useState([]);
  const [secondTitleCard, setSecondTitleCard] = useState([]);
  const [thirdTitleCard, setThirdTitleCard] = useState([]);
  const { resid } = useParams();

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
    <>
      <div className="res-menu">
        <h1 className="menu-name">{name}</h1>
        <div className="menu-1">
          <h3 className="menu-rating">
            {avgRating} ({totalRatingsString})
          </h3>
          <p
            style={{
              fontWeight: "bolder",
              margin: "0px 5px",
              fontSize: "20px",
            }}
          >
            &#9733;
          </p>
          <h3 className="menu-costfortwo">{costForTwoMessage}</h3>
        </div>
        <h3 className="menu-cuisines">{cuisines.join(", ")}</h3>
        <h3 className="menu-add">
          Outlet <span className="menu-add-1">{areaName}</span>
        </h3>
        <h4 className="menu-time">
          {minDeliveryTime} - {maxDeliveryTime} mins
        </h4>
      </div>

      {/* deals for you  */}
      <h3 className="deals-h3">Deals for you</h3>
      <div className="deals">
        {offers.slice(0, 3).map((offer, index) => {
          return (
            <div className="offer" key={index}>
              <h6>{offer.info.offerTag || null}</h6>
              <h5>{offer.info.header}</h5>
              <h5>{offer.info.description}</h5>
            </div>
          );
        })}
      </div>

      {/* firstTitle  */}
      <div className="main-menu">
        <h3 className="main-h1">Menu</h3>
        <h3 className="recom">
          {firstTitle} ({firstTitleCard.length})
        </h3>
        {firstTitleCard.slice(0, 5).map((item, index) => {
          // console.log(item);
          let { name, defaultPrice, description, imageId } = item?.card?.info;
          let { rating } = item?.card?.info?.ratings?.aggregatedRating || "N/A";
          return (
            <div className="menu-card" key={index}>
              <div className="menu-card-info">
                <h3>{name}</h3>
                <h5>₹{defaultPrice / 100}</h5>
                <p className="rating">
                  ⭐ {rating} ({totalRatingsString || 0})
                </p>
                <p className="description">{description}</p>
              </div>

              <div className="menu-card-right">
                <img src={imageUrl + imageId} alt={name} />
                <button className="add-btn">ADD</button>
                <p className="customisable">Customisable</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* secondTitle  */}
      <div className="main-menu">
        <h3 className="recom">
          {secondTitle} ({secondTitleCard.length})
        </h3>
        {secondTitleCard.slice(0, 5).map((item, index) => {
          // console.log(item);
          let { name, defaultPrice, description, imageId } = item?.card?.info;
          let { rating } = item?.card?.info?.ratings?.aggregatedRating || "N/A";
          return (
            <div className="menu-card" key={index}>
              <div className="menu-card-info">
                <h3>{name}</h3>
                <h5>₹{defaultPrice / 100}</h5>
                <p className="rating">
                  ⭐ {rating} ({totalRatingsString || 0})
                </p>
                <p className="description">{description}</p>
              </div>

              <div className="menu-card-right">
                <img src={imageUrl + imageId} alt={name} />
                <button className="add-btn">ADD</button>
                <p className="customisable">Customisable</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* thirdTitle  */}
      <div className="main-menu">
        <h3 className="recom">
          {thirdTitle} ({thirdTitleCard.length})
        </h3>
        {thirdTitleCard.slice(0, 5).map((item, index) => {
          // console.log(item);
          let { name, defaultPrice, description, imageId } = item?.card?.info;
          let { rating } = item?.card?.info?.ratings?.aggregatedRating || "N/A";
          return (
            <div className="menu-card" key={index}>
              <div className="menu-card-info">
                <h3>{name}</h3>
                <h5>₹{defaultPrice / 100}</h5>
                <p className="rating">
                  ⭐ {rating} ({totalRatingsString || 0})
                </p>
                <p className="description">{description}</p>
              </div>

              <div className="menu-card-right">
                <img src={imageUrl + imageId} alt={name} />
                <button className="add-btn">ADD</button>
                <p className="customisable">Customisable</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RestaurantMenu;
