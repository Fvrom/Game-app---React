import React from "react";
import PropTypes from "prop-types";

const TopGamesItem = (props) => {
  return (
    //<div>
    <h3>{props.title}</h3>
    // </div>
  );
};

TopGamesItem.propTypes = {
  title: PropTypes.string,
};

export default TopGamesItem;
