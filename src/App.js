import React from "react";
import { Router } from "@reach/router";
// import { Link } from "@reach/router";

import HomePage from "./pages/Home";
import TopRatedPage from "./pages/TopRated";
import XboxPage from "./pages/Xbox";
import NintendoPage from "./pages/Nintendo";
import PcPage from "./pages/PC";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <TopRatedPage path="/toprated" />
        <XboxPage path="/xbox" />
        <NintendoPage path="/nintendo" />
        <PcPage path="/pc" />
      </Router>
    </div>
  );
}
export default App;
