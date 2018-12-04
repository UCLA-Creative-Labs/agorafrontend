import React from "react";
import { Route } from "react-router-dom";

import Home from "./home";
import Projects from "./projects";
import About from "./about";
import Apply from "./apply";
import Interest from "./interest";
import Events from "./events";
import NavBar from "../components/NavBar";

const App = () => (
  <div className="main-content">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/apply" component={Apply} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/interest" component={Interest} />
  </div>
);

export default App;
