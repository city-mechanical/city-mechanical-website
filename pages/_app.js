import React from "react";
import App from "next/app";
import Head from "next/head";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Router from "next/router";

import "../index.scss";

class MyApp extends App {
  componentDidMount() {
    const { asPath } = Router;
    console.log(asPath);
    switch (asPath) {
      case "/airmaid":
      case "/backflow-prevention-device-certification":
      case "/boilers":
      case "/building-controls-energy-management":
      case "/duct-cleaning":
      case "/jetting-services":
      case "/plumbing":
      case "/refrigeration":
      case "/sauna":
      case "/steam-baths-showers":
      case "/steam-generators":
      case "/sump-pump-systems":
      case "/water-heaters":
      case "/water-softeners":
      case "/water-treatment": {
        Router.replace("/services" + asPath, "/services" + asPath, {
          shallow: true,
        });
      }
      default:
        break;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff"></meta>
          <title>City Mechanical, Inc.</title>
        </Head>
        <div className="App">
          <Header />
          <div className="app-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default MyApp;
