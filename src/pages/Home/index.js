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
  });

  return (
    <>
      <Header></Header>

      <View>
        <h1>Most anticipated games</h1>
        {AnticipatedGames.map((item, key) => {
          return <GameCard key={key} title={item.name} />;
        })}
      </View>
    </>
  );
};

export default HomePage;
