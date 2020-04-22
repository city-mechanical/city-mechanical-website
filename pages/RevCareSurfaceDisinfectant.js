import React from "react";
import PDFViewer from "../components/PDFViewer";

function RevCareSurfaceDisinfectant() {
  return (
    <React.Fragment>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>
      <PDFViewer file="/pdfs/Rev Care Surface Disinfectant.pdf" />
    </React.Fragment>
  );
}

export default RevCareSurfaceDisinfectant;
