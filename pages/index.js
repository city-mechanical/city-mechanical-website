import React from "react";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const pages = require("../data/data.json").data.pages;

function Home() {
  const featuredServices = [
    ["hvac", "refrigeration"],
    ["plumbing", "building-controls-energy-management"]
  ];

  return (
    <div id="home">
      <HeroBanner images={pages["home"].banner} />
      <Container>
        <div className="featured">
          <h2 className="title">Our Services</h2>
          {Object.entries(featuredServices).map(([index, serviceGroup]) => {
            return (
              <Row className="group-row" key={index}>
                {Object.entries(serviceGroup).map(([index, service]) => {
                  const services = pages["services"].children;

                  return (
                    <Col className="group-card" md={6} key={index}>
                      <div className="featured-item">
                        <h3 className="title">{services[service].title}</h3>
                        <p className="overview">
                          {services[service].overview[1]}
                        </p>
                        <Link
                          href={services.link + "/[name]"}
                          as={services.link + services[service].link}
                        >
                          <a className="read-more-btn mt-4">Read More</a>
                        </Link>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
