import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const propTypes = {};

const defaultProps = {};

function Service(props) {
  const { title, banner, overview, children } = props;

  return (
    <div id="service">
      <Container id="banner">
        <div>Home / Services / {title}</div>
        <img
          src={process.env.PUBLIC_URL + banner}
          alt={title + "Banner Image"}
          className="banner"
        />
      </Container>
      <Container>
        <Row>
          <Col md={12} lg={6} className="service-overview">
            <h2 className="title">Service Overview</h2>
            {overview.map((p, index) => {
              return <p key={index}>{p}</p>;
            })}
            <Link to={"/request-service"} className={"request-service"}>
              Request Service
            </Link>
          </Col>
          {children ? (
            <Col md={12} lg={6} className={"service-content"}>
              {children}
            </Col>
          ) : (
            <Col md={12} lg={6} style={{ marginTop: 0 }} />
          )}
        </Row>
      </Container>
    </div>
  );
}

Service.propTypes = propTypes;
Service.defaultProps = defaultProps;

export default Service;
