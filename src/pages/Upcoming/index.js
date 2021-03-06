import React from "react";
import View from "../../components/View";
import Header from "../../components/Header";
import Title from "../../components/Title";
import queryString from "query-string";
import "./upcoming.css";

import GameCard from "../../components/GameCard";


const TopRatedPage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);

  const [UpcomingGames, setUpcomingGames] = React.useState([]);

  React.useEffect(() => {
    const rootUrl = `https://api.rawg.io/api/games?dates=2021-06-01,2021-12-30&ordering=-added?&key=${clientId}`;

    fetch(`${rootUrl}`, {
      headers: {
        Authorization: "Bearer " + access_token,
        token: `${clientId}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setUpcomingGames(json.results);
      });
  });

  return (
    <>
      <Header></Header>
      <Title title={"Upcoming games"} />
      <View>
        {UpcomingGames.map((item, key) => {
          return <GameCard key={key} item={item} rating={"Metacritic: "} />;
        })}
      </View>
    </>
  );
};

export default TopRatedPage;
