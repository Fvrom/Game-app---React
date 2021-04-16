import React from "react";

import { Link } from "@reach/router";
import View from "../../components/View";
import Header from "../../components/Header";
import GameCard from "../../components/GameCard";
import "./home.css";

const HomePage = () => {
  /* 
  const redirectUri = process.env.REACT_APP_SYSTEMET_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const url = `https://api.rawg.io/api/auth/login?client_id=${clientId}}&show_dialog=true&response_type=token&&redirect_uri=${redirectUri}`; */

  return (
  <>
  <Header> 
    
  </Header>
    
    <View>
      
       <GameCard> </GameCard>
       <GameCard> </GameCard>
       <GameCard> </GameCard>
       <GameCard> </GameCard>
     
      
    </View>
  </>
  );
};

export default HomePage;
