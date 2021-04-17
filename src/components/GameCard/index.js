import React from "react";
import PropTypes from "prop-types";
import "./gamecard.css";

const GameCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.item.background_image} alt={"game"}></img>
      </div>
      <div className="card-info">
        <h3>{props.item.name}</h3>
        <h4>Release: {props.item.released}</h4>
        <p>
          {props.rating} {props.item.metacritic}
        </p>

        <ul>
          {props.item.platforms?.map((platformItem, platformIndex) => (
            <li key={platformIndex}>{platformItem.platform.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
  platforms: PropTypes.string,
};

export default GameCard;

// Release date
// Platsforms
// metacritic rating
// image
