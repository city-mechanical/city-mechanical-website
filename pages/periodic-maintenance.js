import React from "react";
import Service from "../containers/Service";

function PeriodicMaintenance() {
  const pages = require("../data/data.json").data.pages;
  const pm = pages["periodic-maintenance"];

  return (
    <Service
      title={pm.title}
      banner={pm.banner}
      breadcrumbs={[
        { title: pages["home"].title, link: pages["home"].link },
        { title: pm.title, link: pm.link },
      ]}
      overview={pm.overview}
      metaTitle={pm.metaTitle}
      metaDesc={pm.metaDesc}
      buttonText={"Request Maintenance"}
    />
  );
}

export default PeriodicMaintenance;
