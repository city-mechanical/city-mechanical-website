import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Banner from "../../components/Banner";

function GivingBack() {
  const pages = require("../../data/data.json").data.pages;
  const givingBack = pages["about"].children["giving-back"];

  return (
    <div id="giving-back">
      <Banner
        img={givingBack.banner}
        title={givingBack.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: pages["about"].title, link: pages["about"].link },
          {
            title: givingBack.title,
            link: pages["about"].link + givingBack.link
          }
        ]}
      />
      <Container>
        <Row>
          {Object.entries(givingBack.content).map(([index, section]) => {
            return (
              <Col
                key={index}
                xs={12}
                md={6}
                className={"giving-back-content " + section.id}
              >
                <h2 className="title">{section.title}</h2>
                <Row>
                  {Object.entries(section.content).map(([index, sub]) => {
                    return (
                      <Col key={index} xs={12} className="sub-section">
                        <h3 className="subtitle">{sub.title}</h3>
                        {Object.entries(sub.content).map(([index, content]) => {
                          return sub.list ? (
                            <li key={index}>{content}</li>
                          ) : (
                            <p key={index}>{content}</p>
                          );
                        })}
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="pt-0">
        {Object.entries(givingBack.projects).map(([index, project]) => {
          return (
            <Row key={index} className="project">
              <Col md={12} lg={6}>
                <h2 className="title">{project.title}</h2>
                {Object.entries(project.overview).map(([index, p]) => {
                  return <p key={index}>{p}</p>;
                })}
                <p className="image-description">
                  <span className="accented">Pictured: </span>
                  {project.image.description}
                </p>
              </Col>
              <Col md={12} lg={6}>
                <div
                  className="giving-back-image"
                  style={{
                    backgroundImage: "url(" + project.image.file + ") "
                  }}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default GivingBack;
