import React from "react";
import withLayout from "../containers/Layout";
import Service from "../containers/Service";

function PeriodicMaintenance() {
  const pages = require("../data/data.json").data.pages;
  const pm = pages["PeriodicMaintenance"];

  return (
    <Service
      title={pm.title}
      banner={pm.banner}
      breadcrumbs={[
        { title: pages["home"].title, link: pages["home"].link },
        { title: pm.title, link: pm.link }
      ]}
      overview={pm.overview}
      buttonText={"Request Maintenance"}
    />
  );
}

export default withLayout(PeriodicMaintenance);
