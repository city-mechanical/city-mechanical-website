import React from "react";
import App from "next/app";
import Head from "next/head";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

import "../index.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <title>React App</title>
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
