import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import Navigation from "./components/common/Navigation";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div className="container mx-auto mt-16">
      <Navigation loading={false} />
      <Switch>
        <Route path={"/"} exact={true} component={HomePage} />
        <Route path={"/about"} exact={true} component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
