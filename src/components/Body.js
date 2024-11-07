import React, { useEffect, useState } from "react";
import { FOODFIRE_API_URL } from "../../public/Common/constants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getRestaurants() {
    try {
      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const response = await fetch(FOODFIRE_API_URL);
      const json = await response.json();
      const resData = checkJsonData(json);

      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  // Update `searchTerm` and filter restaurants as user types
  const handleInputChange = (event) => {
    const searchInput = event.target.value;
    setSearchTerm(searchInput);

    // Filter restaurants based on the input value
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestrauntCard key={restaurant?.info?.id} {...restaurant.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
