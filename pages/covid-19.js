import React from "react";
import PDFViewer from "../components/PDFViewer";

function Covid19() {
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
      <PDFViewer file="/pdfs/CMI - COVID 19 Pandemic Prevention Program.pdf" />
    </React.Fragment>
  );
}

export default Covid19;
