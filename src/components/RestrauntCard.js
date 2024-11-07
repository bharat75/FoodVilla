import React from "react";
import { IMG_CDN_URL } from "../../public/Common/constants";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h4
            style={{
              backgroundColor:
                avgRatingString < 4
                  ? "var(--light-red)"
                  : avgRatingString === "--"
                  ? "white"
                  : "var(--dark-green)",
              color: avgRatingString === "--" ? "black" : "white",
              padding: "5px 8px",
              borderRadius: "5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </span>
      </div>
    </Link>
  );
};

export default RestaurantCard;
