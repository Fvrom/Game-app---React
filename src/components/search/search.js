import React from "react";
import "./search.css"


const SearchBar = (props) => {
    return (
        <>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search year</span>
        </label>
        <input
         onChange={props.handleChange}
            type="text"
            placeholder="Search year"
            
        />
        <button>Search</button>
        </>
    )
    };

export default SearchBar;