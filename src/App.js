import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import Home from "./pages/Home";

import "./App.scss";

function App() {
  var divStyle = {
    background: "black"
  };

  var h1Style = {
    margin: 0
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
