import React from "react";
import View from "../../components/View";
import Header from "../../components/Header";
import Title from "../../components/Title";
import queryString from "query-string";
import "./pgby.css";

import GameCard from "../../components/GameCard";
import Search from "../../components/search/search";

const TopRatedPage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);
  
  
  const [search, setSearch] = React.useState("");
  const [TopGames, setTopGames] = React.useState([]);

  React.useEffect(() => {
    const rootUrl = `https://api.rawg.io/api/games?dates=${search}?&ordering=-rating?&key=${clientId}`;

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
  }, [search, access_token, clientId]);

  return (
    <>
      <Header></Header>
      <Title title={"Popular Games By Year"} />
      <Search handleChange={(e) => setSearch(e.target.value)}/>
      <View>
        {search && TopGames.map((item, key) => {
          return <GameCard key={key} item={item} rating={"Metacritic: "} />;
        })}
      </View>
    </>
  );
};

export default TopRatedPage;
