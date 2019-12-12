import React from "react";
import HeroBanner from "../components/HeroBanner";

const pages = require("../data/data.json").data.pages;

function Home() {
  return <HeroBanner images={pages["home"].banner} />;
}

export default Home;
