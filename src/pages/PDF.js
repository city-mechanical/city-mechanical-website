import React from "react";

function PDF(props) {
  const { title, description, path } = props;
  return (
    <React.Fragment>
      <h2 className="title">{title}</h2>
      <p>{description}</p>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className={"service-button"}
      >
        More Info
      </a>
    </React.Fragment>
  );
}

export default PDF;
