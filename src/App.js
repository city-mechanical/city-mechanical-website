import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./containers/Service";
import PDF from "./pages/PDF";
import PeriodicMaintenance from "./pages/PeriodicMaintenance";
import About from "./pages/About";
import GivingBack from "./pages/GivingBack";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import StaffDirectory from "./pages/StaffDirectory";
import RequestService from "./pages/RequestService";

const pages = require("./data/data.json").data.pages;

const SaunaPDF = (
  <PDF
    title={"Steam Sauna Bath"}
    description="SteamSaunaBath is a company that we work with in order to deliver high-quality steam products.  We believe that SteamSaunaBath explains the importance, and possibilities, of steam products best.  To see how SteamSaunaBath describes their steam products, click the button below."
    path={"../pdfs/steamsaunabath-See-What-You-Are-Missing.pdf"}
  />
);

const myPages = {
  Home,
  Services,
  Boilers: (
    <PDF
      title={"Hilton San Francisco Airport Bayfront"}
      description="Using Intellihot’s boiler technology, we were able to greatly improve the Hilton SFO Bayfront Hotel’s water heating system. To read Intellihot’s report of how our work fixed Hilton’s boiler problem, click the button below."
      path={"../pdfs/Hilton-Burlingame-SFO.pdf"}
    />
  ),
  Saunas: SaunaPDF,
  SteamBathsShowers: SaunaPDF,
  SteamGenerators: SaunaPDF,
  PeriodicMaintenance,
  About,
  GivingBack,
  Testimonials,
  Contact,
  StaffDirectory,
  RequestService
};

function generateRoutes(page, index) {
  let routes = [];

  routes.push(
    <Route
      path={process.env.PUBLIC_URL + page.link}
      component={myPages[page.name]}
      key={index}
      exact
    />
  );

  page.children.forEach((child, index) => {
    routes.push(
      <Route
        path={process.env.PUBLIC_URL + page.link + child.link}
        component={
          page.title === "Services"
            ? () => (
                <Service
                  title={child.title}
                  banner={child.banner}
                  overview={child.overview}
                  children={myPages[child.name]}
                  breadcrumbs={[
                    [pages[0].title, pages[0].link],
                    [page.title, page.link],
                    [child.title, page.link + child.link]
                  ]}
                />
              )
            : myPages[child.name]
        }
        key={index}
        exact
      />
    );
  });

  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {pages.map((page, index) => {
            return generateRoutes(page, index);
          })}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
