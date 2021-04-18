import React from "react";
import "./search.css"


const SearchBar = () => (
    <form className="search_bar" action="/pgby" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search year</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search year"
            name="dates" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;