import React from "react";
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

function Sitemap(props) {
  const { title, link, className } = props;

  return (
    <div className={className ? className + " sitemap-link" : "sitemap-link"}>
      <Link to={link}>{title}</Link>
    </div>
  );
}

Sitemap.propTypes = propTypes;
Sitemap.defaultProps = defaultProps;

export default Sitemap;
