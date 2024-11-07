import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FOODFIRE_MENU_API_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../../public/Common/constants";
import { MenuShimmer } from "./Shimmer";

const RestaurantDetail = () => {
  const { id } = useParams(); // Fetch the id from the URL
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(`${FOODFIRE_MENU_API_URL}/${id}`);
        const json = await response.json();
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurantData(restaurantData);

        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  return !restaurantData ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurantData?.cloudinaryImageId}
          alt={restaurantData?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurantData?.name}</h2>
          <p className="restaurant-tags">
            {restaurantData?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurantData?.avgRating < 4
                  ? { backgroundColor: "red", color: "white" }
                  : restaurantData?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "green", color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurantData?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurantData?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurantData?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
