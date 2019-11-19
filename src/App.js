import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Airmaid from './pages/Airmaid';
import BackflowPreventionDeviceCertification from './pages/BackflowPreventionDeviceCertification';
import PeriodicMaintenance from './pages/PeriodicMaintenance';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import RequestService from './pages/RequestService';

import './App.scss';

const pages = require('./data/data.json').data.pages;

function App() {
  const myPages = {
    Home,
    Services,
    Airmaid,
    BackflowPreventionDeviceCertification,
    // Boilers,
    // BoosterSystems,
    // BuildingControlsEnergyManagement,
    // DuctCleaning,
    // HVAC,
    // JettingServices,
    // Plumbing,
    // Refrigeration,
    // Saunas,
    // SheetMetal,
    // SteamBathsShowers,
    // SteamGenerators,
    // SumpPumpSystems,
    // WaterHeaters,
    // WaterSofteners,
    // WaterTreatment,
    PeriodicMaintenance,
    About,
    // GivingBack,
    Testimonials,
    Contact,
    // StaffDirectory,
    RequestService
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {pages.map((page, index) => {
            if (page.children === undefined || page.children.length === 0) {
              return (
                <Route
                  path={page.link}
                  component={myPages[page.name]}
                  key={index}
                  exact
                />
              );
            }

            return (
              <React.Fragment>
                <Route
                  path={page.link}
                  component={myPages[page.name]}
                  key={index}
                  exact
                />
                {page.children.map((child, index) => {
                  return (
                    <Route
                      path={child.link}
                      component={myPages[child.name]}
                      key={index}
                      exact
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
