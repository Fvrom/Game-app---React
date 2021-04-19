import React from "react";
import View from "../../components/View";
import Header from "../../components/Header";
import Title from "../../components/Title";
import queryString from "query-string";
import "./toprated.css";

import GameCard from "../../components/GameCard";

const TopRatedPage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);

  const [TopGames, setTopGames] = React.useState([]);

  React.useEffect(() => {
    const rootUrl = `https://api.rawg.io/api/games?ordering=-metacritic?&key=${clientId}`;

    fetch(`${rootUrl}`, {
      headers: {
        Authorization: "Bearer " + access_token,
        token: `${clientId}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setTopGames(json.results);
      });
  },[access_token, clientId]);

  return (
    <>
      <Header></Header>
      <Title title={"Top rated games"} />
      <View>
        {TopGames.map((item, key) => {
          return <GameCard key={key} item={item} rating={"Metacritic: "} />;
        })}
      </View>
    </>
  );
};

export default TopRatedPage;
