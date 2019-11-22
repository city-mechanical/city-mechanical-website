import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const propTypes = {};

const defaultProps = {};

function Banner(props) {
  const { title, img, subtitle, links } = props;

  console.log(links);

  return (
    <Container id="banner" style={{ backgroundImage: "url(" + img + ")" }}>
      <div className="overlay" />
      {title ? <h1 className="banner-title">{title}</h1> : null}
      {subtitle ? (
        <div className="banner-subtitle">
          <Link to={"/"} className="breadcrumb">
            Home
          </Link>
          {"/"}
          <Link to={"/" + props.links[1]} className="breadcrumb">
            Services
          </Link>
          {"/"}
          <Link
            to={"/" + props.links[1] + "/" + props.links[2]}
            className="breadcrumb"
          >
            {title}
          </Link>
        </div>
      ) : null}
    </Container>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
