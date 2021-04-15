import React from "react";
import View from "../../components/View";
import queryString from "query-string";
import "./toprated.css";
import GameCard from "../../components/GameCard";

const TopRatedPage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);
  const [TopGames, setTopGames] = React.useState([]);

  React.useEffect(() => {
    const rootUrl = `https://api.rawg.io/api/games?ordering=-metacritic?key=${clientId}`;

    fetch(`${rootUrl}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        //  setTopGames(json.results);
      });
  });

  return (
    <View>
      <div className="home-view">
        <div className="container">
          <h1>Top Rated Games</h1>

          {TopGames.map((item, key) => {
            return <GameCard key={key} title={item.name} />;
          })}
        </div>
      </div>
    </View>
  );
};

// Release date
// Platsforms
// metacritic rating
// image

export default TopRatedPage;
