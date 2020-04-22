import React from "react";

function PDFViewer(props) {
  const { file } = props;
  return (
    <object
      style={({ position: "absolute" }, { left: 0 }, { top: 0 })}
      width="100%"
      height="100%"
      data={file}
      type="application/pdf"
    >
      <embed
        style={({ position: "absolute" }, { left: 0 }, { top: 0 })}
        width="100%"
        height="100%"
        src={file}
        type="application/pdf"
      ></embed>
    </object>
  );
}

export default PDFViewer;
