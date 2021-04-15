import React from "react";
import View from "../../components/View";
import queryString from "query-string";
import "./toprated.css";
import TopGamesItem from "../../components/TopGamesItem";
//import Results from "./Results";

//const Search = () => {

// const [gameResults, setGameResults] = useState([])

const TopRatedPage = () => {
  //const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  //const url = `https://api.rawg.io/api/platforms/lists/parents?client_id=${clientId}`;

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
        //setTopGames(json.results);
        //console.log(json["results"]);
        //let results = json["results"];
        console.log(json.results);
      });
  });

  /*
  const arr = [];
  Object.keys(results).forEach((key) =>
    arr.push({ name: key, value: results[key] })
  ); */

  return (
    <View>
      <div className="home-view">
        <div className="container">
          <h1>Top Rated Games</h1>
        </div>
      </div>
    </View>
  );
};

export default TopRatedPage;
