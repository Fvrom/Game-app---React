import React from "react";
// import { Redirect } from "@reach/router";
// import Logo from "../../components/Logo";
import View from "../../components/View";
// import SearchField from "../../components/SearchField";
// import SearchItem from "../../components/SearchItem";

import queryString from "query-string";
import "./home.css";

const Home = () => {
  const [searchResult, setSearchResult] = React.useState([]);
  const searchText = "Kanye";

  const { access_token } = queryString.parse(window.location.hash);
  React.useEffect(() => {
    const rootUrl = "https://yrgo.github.io/api/movies/the-room.json";

    /* if (!searchText) {
      return;
    } */

    fetch(`${rootUrl}`, {
      /*  headers: {
        Authorization: "Bearer " + access_token,
      },*/
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div className="home-view">
      <div
        className="search-items"
        style={{ width: "100%", marginBottom: "100px" }}
      >
        {searchResult.map((item, key) => {
          return (
            <div
              key={key}
              image={item.images[0].url}
              title={item.artists[0].name}
              album={item.name}
              year={new Date(item.release_date).getFullYear()}
              playUrl={item.external_urls.spotify}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
