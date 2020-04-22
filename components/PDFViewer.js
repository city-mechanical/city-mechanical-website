import React from "react";

function PDFViewer(props) {
  const { file } = props;
  return (
    <object
      style={({ position: "absolute" }, { left: 0 }, { top: 0 })}
      width="100%"
      height="100%"
      data={
        "https://docs.google.com/viewer?url=https://www.citymechanical.com" +
        file +
        "&embedded=true"
      }
      type="application/pdf"
    >
      <embed
        style={({ position: "absolute" }, { left: 0 }, { top: 0 })}
        width="100%"
        height="100%"
        src={
          "https://docs.google.com/viewer?url=https://www.citymechanical.com" +
          file +
          "&embedded=true"
        }
        type="application/pdf"
      ></embed>
    </object>
  );
}

export default PDFViewer;
