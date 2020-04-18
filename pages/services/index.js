import React from "react";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Banner from "../../components/Banner";
import { NextSeo } from "next-seo";

function ServicesHub() {
  const pages = require("../../data/data.json").data.pages;
  const hub = pages["services"];
  const services = hub.children;

  return (
    <div id="service">
      <NextSeo title={hub.metaTitle} description={hub.metaDesc} />
      <Banner
        img={hub.banner}
        title={hub.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: hub.title, link: hub.link },
        ]}
      />
      <div className="container">
        <Tab.Container defaultActiveKey="hvac">
          <Row>
            <Col md={4}>
              <Nav variant="pills" className="flex-column">
                {Object.entries(services).map(([index, service]) => {
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={index}>{service.title}</Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
            <Col md={8} className="hub-content">
              <Tab.Content>
                {Object.entries(services).map(([index, service]) => {
                  return (
                    <Tab.Pane eventKey={index} key={index}>
                      <Banner
                        img={service.banner}
                        title={service.title}
                        size="sm"
                      />
                      <div className="continue-reading mt-5">
                        <p>{service.overview[0]}</p>
                        <p>{service.overview[1]}</p>
                      </div>
                      <Link
                        href={hub.link + "/[name]"}
                        as={hub.link + service.link}
                      >
                        <a className="service-button mt-4">Continue Reading</a>
                      </Link>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default ServicesHub;
