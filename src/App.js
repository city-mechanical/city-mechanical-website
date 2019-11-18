import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Airmaid from "./pages/Airmaid";
import BackflowPreventionDeviceCertification from "./pages/BackflowPreventionDeviceCertification";
import PeriodicMaintenance from "./pages/PeriodicMaintenance";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import RequestService from "./pages/RequestService";

import "./App.scss";

const pages = require("./data/pages.json").pages;

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
          {/* Services Pages */}
          <Route path={pages.services.link}>
            <Services />
          </Route>
          <Route path={pages.airmaid.link}>
            <Airmaid />
          </Route>
          <Route path={pages.backflowPreventionDeviceCertification.link}>
            <BackflowPreventionDeviceCertification />
          </Route>
          {/* Periodic Maintenance Page */}
          <Route path={pages.periodicMaintenance.link}>
            <PeriodicMaintenance />
          </Route>
          {/* About Pages */}
          <Route path={pages.about.link}>
            <About />
          </Route>
          {/* Testimonials Page */}
          <Route path={pages.testimonials.link}>
            <Testimonials />
          </Route>
          {/* Contact Pages */}
          <Route path={pages.contact.link}>
            <Contact />
          </Route>
          {/* Request Service Page */}
          <Route path={pages.requestService.link}>
            <RequestService />
          </Route>
          {/* Home Page */}
          <Route path={pages.home.link}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
