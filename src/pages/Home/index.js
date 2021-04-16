import React from "react";

import { Link } from "@reach/router";
import View from "../../components/View";
import Header from "../../components/Header";
import GameCard from "../../components/GameCard";
import queryString from "query-string";
import "./home.css";

const HomePage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);

  const [AnticipatedGames, setAnticipatedGames] = React.useState([]);
  const [Platforms, setPlatforms] = React.useState([]);
  
  React.useEffect(() => {
    const url = `https://api.rawg.io/api/games?dates=2021-04-10,2022-12-10&ordering=-added?key=${clientId}`;

    fetch(`${url}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
       console.log(json.results);

        setAnticipatedGames(json.results);
      });
  }, []);

  return (
    <>
      <Header></Header>

      <h1 className="title_home" >Most anticipated games</h1>
      <View>
      
        {AnticipatedGames.map((item, key) => {

         
          // item.platforms.map((platformItem, platformItemIndex) => { 
          //   // console.log('platform', item.platform);
           
          // //  return 
          // //   item.platform.map((item,key) => {
          // //     console.log(item.platform);
          // //   }) 

          // console.log(platformItem.platform.name)
          // return <GameCard key={platformItemIndex} platforms={platformItem.platform.name} />
          // }) 
          
          return <GameCard key={key} item={item} />;

        })}
               
        
      </View>
    </>
  );
};

export default HomePage;
