import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Banner from "../../components/Banner";

function About() {
  const pages = require("../../data/data.json").data.pages;
  const about = pages["about"];

  return (
    <div id="about">
      <Banner
        img={about.banner}
        title={about.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          {
            title: about.title,
            link: about.link
          }
        ]}
      />
      <Container>
        <Row>
          <Col md={12} lg={6} className="our-story">
            <h2 className="title">Our Story</h2>
            <p className="subtitle">Serving the Greater Bay Area since 1989</p>
            {Object.entries(about.overview).map(([index, p]) => {
              return <p key={index}>{p}</p>;
            })}
            <Link href={"/services"}>
              <a className={"service-button"}>{"Our Services"}</a>
            </Link>
          </Col>
          <Col md={12} lg={6} className={"service-content"}>
            Gallery HERE
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
