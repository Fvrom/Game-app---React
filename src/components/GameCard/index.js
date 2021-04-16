import React from "react";
import PropTypes from "prop-types";
import "./gamecard.css";


const GameCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
      <img src={props.image} alt={"game"}></img>
      </div>
      <div> 
      <h3>{props.title}</h3>
      <h2>Release: {props.released}</h2>
      <p>Metacritic: {props.metacritic}</p>
      <p> Availble on platforms:</p>
      <li>{props.platsforms}</li>
      <li>{props.platsforms}</li>
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
