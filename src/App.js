import React from "react";
import { Router } from "@reach/router";
// import { Link } from "@reach/router";

import HomePage from "./pages/Home";
import TopRatedPage from "./pages/TopRated";
import NewReleasePage from "./pages/NewRelease";
import NintendoPage from "./pages/Upcoming";
import PcPage from "./pages/PC";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <TopRatedPage path="/toprated" />
        <NewReleasePage path="/newrelease" />
        <NintendoPage path="/upcoming" />
        <PcPage path="/pc" />
      </Router>
    </div>
  );
}
export default App;
