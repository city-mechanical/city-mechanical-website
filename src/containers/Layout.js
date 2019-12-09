import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

import "../index.scss";

const withLayout = Page => {
  return () => (
    <div className="App">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default withLayout;
