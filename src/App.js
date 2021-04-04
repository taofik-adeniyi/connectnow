import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);
export default App;
