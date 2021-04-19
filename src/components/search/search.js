import React from "react";
import "./search.css";

const SearchBar = (props) => {
  return (
    <div className="search-field">
      <input
        onChange={props.handleChange}
        type="text"
        placeholder="Search Game"
      />
    </div>
  );
};

export default SearchBar;
