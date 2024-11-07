import React from "react";
import pizza from "../../images/pizza.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-details">
        <h3>Have no time to prepare food ?</h3>
        <h5>Let us know we will deliver you food in no time !!</h5>
        <h5>
          Discover a wide range of restaurants{" "}
          <Link to={`/`} className="here-link">
            here
          </Link>
        </h5>
      </div>
      <div className="image-about-us">
        <img className="pizza" src={pizza} alt="Pizza"></img>
      </div>
    </div>
  );
};

export default About;
