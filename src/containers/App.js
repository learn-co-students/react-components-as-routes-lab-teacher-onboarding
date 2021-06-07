import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

const App = props => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/actors">
            <Actors></Actors>
          </Route>
          <Route path="/directors">
            <Directors></Directors>
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
