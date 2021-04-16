import React from "react";
import { Link } from "@reach/router";

import "./header.css";

const Header = (props) => {

return (
<div>
    <nav className="header_view">
        <ul>
        <li> <Link className="buttonStyled" to={"/toprated"}>
        Top Rated Games
        </Link></li>
        <li><Link className="buttonStyled" to="/newrelease">
        New Releases
        </Link></li>
        <li> <Link className="home_button_style"  to={"/"}>
        Home 
        </Link></li> 
        <li><Link className="buttonStyled" to="/upcoming">
        Upcoming Games
        </Link></li>
        <li><Link className="buttonStyled" to="/pgby">
        PopularGamesByYear
        </Link></li>
        </ul>
    </nav>
    </div>




    )
}
export default Header; 