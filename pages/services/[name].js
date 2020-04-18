import React from "react";
import { useRouter } from "next/router";
import Service from "../../containers/Service";

import PDF from "../../components/PDF";

function getChildren(title) {
  switch (title) {
    case "Boilers & Boiler Certification":
      return (
        <PDF
          title={"Hilton San Francisco Airport Bayfront"}
          description="Using Intellihot’s boiler technology, we were able to greatly improve the Hilton SFO Bayfront Hotel’s water heating system. To read Intellihot’s report of how our work fixed Hilton’s boiler problem, click the button below."
          path={"../pdfs/Hilton-Burlingame-SFO.pdf"}
        />
      );
    case "Saunas":
    case "Steam Baths & Showers":
    case "Steam Generators":
      return (
        <PDF
          title={"Steam Sauna Bath"}
          description="SteamSaunaBath is a company that we work with in order to deliver high-quality steam products.  We believe that SteamSaunaBath explains the importance, and possibilities, of steam products best.  To see how SteamSaunaBath describes their steam products, click the button below."
          path={"../pdfs/steamsaunabath-See-What-You-Are-Missing.pdf"}
        />
      );
    default:
      return null;
  }
}

function ServicePage() {
  const router = useRouter();
  const pages = require("../../data/data.json").data.pages;
  const service = pages["services"].children[router.query.name];

  if (service) {
    const children = getChildren(service.title);
    return (
      <Service
        title={service.title}
        banner={service.banner}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: pages["services"].title, link: pages["services"].link },
          {
            title: service.title,
            href: pages["services"].link + "/[name]",
            as: pages["services"].link + service.link,
          },
        ]}
        overview={service.overview}
        metaTitle={service.metaTitle}
        metaDesc={service.metaDesc}
        children={children}
      />
    );
  } else {
    return null;
  }
}

export default ServicePage;
