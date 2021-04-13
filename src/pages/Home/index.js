import React from "react";

import { Link } from "@reach/router";
import View from "../../components/View";
import "./home.css";

const HomePage = () => {
  /* 
  const redirectUri = process.env.REACT_APP_SYSTEMET_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const url = `https://api.rawg.io/api/auth/login?client_id=${clientId}}&show_dialog=true&response_type=token&&redirect_uri=${redirectUri}`; */

  return (
    <View>
      <div className="home-view">
        <div className="container">
          <h1> Top Games</h1>

          <Link className="buttonStyled" to={"/toprated"}>
            Top Rated Games
          </Link>
          <Link className="buttonStyled" to="/xbox">
            New Releases
          </Link>
          <Link className="buttonStyled" to="/nintendo"></Link>
          <Link className="buttonStyled" to="/pc">
            PC
          </Link>
        </div>
      </div>
    </View>
  );
};

export default HomePage;
