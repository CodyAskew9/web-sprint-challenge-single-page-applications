import React from "react";
import FormPage from "./comps/Form";
import Home from "./comps/Homepage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Pizza" component={FormPage} />
    </Switch>
  );
};

export default App;