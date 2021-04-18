import React from "react";
import { Link } from "@reach/router";

import "./header.css";

const Header = (props) => {
  return (
    <div>
      <nav className="header_view">
        <ul>
          <li>
            <Link className="button_styled" to={"/toprated"}>
              Top Rated Games
            </Link>
          </li>
          <li>
            <Link className="button_styled" to="/newrelease">
              New Releases
            </Link>
          </li>
          <li>
            <Link className="home_button" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="button_styled" to="/upcoming">
              Upcoming Games
            </Link>
          </li>
          <li>
            <Link className="button_styled_pgby" to="/pgby">
              PopularGamesByYear
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
