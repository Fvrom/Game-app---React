import React from "react";
import View from "../../components/View";
import Header from "../../components/Header";
import Title from "../../components/Title";
import GameCard from "../../components/GameCard";
import queryString from "query-string";
import "./newRelease.css";

const HomePage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);

  const [AnticipatedGames, setAnticipatedGames] = React.useState([]);

  React.useEffect(() => {
    const url = `https://api.rawg.io/api/games?dates=2021-03-01,2021-04-18&platforms=18,1,7?&key=${clientId}`;

    fetch(`${url}`, {
      headers: {
        Authorization: "Bearer " + access_token,
        token: `${clientId}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAnticipatedGames(json.results);
      });
  }, [access_token, clientId]);

  return (
    <>
      <Header></Header>

      <Title title={"New Releases"} />
      <View>
        {AnticipatedGames.map((item, key) => {
          return <GameCard key={key} item={item} />;
        })}
      </View>
    </>
  );
};

export default HomePage;
