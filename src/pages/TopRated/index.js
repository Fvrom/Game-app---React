import React from "react";
import View from "../../components/View";
import queryString from "query-string";
import "./toprated.css";
//import Results from "./Results";

//const Search = () => {

// const [gameResults, setGameResults] = useState([])

const TopRatedPage = () => {
  //const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  //const url = `https://api.rawg.io/api/platforms/lists/parents?client_id=${clientId}`;

  const { access_token } = queryString.parse(window.location.hash);

  // React.useEffect(() => {
  const rootUrl = `https://api.rawg.io/api/games?metacritic=80,100?key=${clientId}`;

  fetch(`${rootUrl}`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json["results"]);
    });

  return (
    <View>
      <div className="home-view">
        <div className="container">
          <h1>Top Rated Games</h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </View>
  );
};

export default TopRatedPage;
