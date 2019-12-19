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
            <h3 className="subtitle">
              Serving the Greater Bay Area since 1989
            </h3>
            {Object.entries(about.overview).map(([index, p]) => {
              return <p key={index}>{p}</p>;
            })}
            <Link href={"/services"}>
              <a className={"service-button"}>{"Our Services"}</a>
            </Link>
          </Col>
          <Col md={12} lg={6} className={"about-content"}>
            {Object.entries(about.gallery).map(([index, galleryRow]) => {
              return (
                <Row key={index} noGutters>
                  {Object.entries(galleryRow).map(([index, image]) => {
                    return (
                      <Col
                        xs={12}
                        sm={6}
                        key={index}
                        className={"col-index-" + index}
                      >
                        <div
                          className="about-image"
                          style={{
                            backgroundImage: "url(" + image + ") "
                          }}
                        />
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
