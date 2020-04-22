import React from "react";

function PDFViewer(props) {
  const { file } = props;
  return (
    <embed
      style={({ position: "absolute" }, { left: 0 }, { top: 0 })}
      width="100%"
      height="100%"
      src={file}
      type="application/pdf"
    ></embed>
  );
}

export default PDFViewer;
