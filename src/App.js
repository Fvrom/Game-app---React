import React from "react";
import { Router } from "@reach/router";
// import { Link } from "@reach/router";

import HomePage from "./pages/Home";
import TopRatedPage from "./pages/TopRated";
import NewReleasePage from "./pages/NewRelease";
import NintendoPage from "./pages/Upcoming";
import PgByPage from "./pages/PgBy";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <TopRatedPage path="/toprated" />
        <NewReleasePage path="/newrelease" />
        <NintendoPage path="/upcoming" />
        <PgByPage path="/pgby" />
      </Router>
    </div>
  );
}
export default App;
