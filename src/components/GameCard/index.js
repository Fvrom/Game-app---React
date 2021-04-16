import React from "react";
import PropTypes from "prop-types";
import "./gamecard.css";
import image from "./images.jpg";

const GameCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image}></img>
      </div>
      <h3>{props.title}</h3>
      <h2>Released: {props.released}</h2>
      <p>Metacritic: {props.metacritic}</p>
      <p> Availble on platforms:</p>
      <p>{props.platsforms}</p>
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
