import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Switch from
import Home from "./pages";
import SignInPage from "./pages/signIn";

function App() {
  return (
    <Router basename="/pages">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signIn" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
