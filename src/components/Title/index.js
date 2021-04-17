import React from "react";
import PropTypes from "prop-types";
import "./title.css";

const Title = (props) => {
  return <h2 className="title">{props.title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
