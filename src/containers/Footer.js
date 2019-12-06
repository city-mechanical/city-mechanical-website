import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactLink from "../components/ContactLink";
import Address from "../components/Address";
import UtilityNav from "../components/UtilityNav";
import Sitemap from "../components/Sitemap";

const cmi = require("../data/data.json").data.cmi;
const locations = require("../data/data.json").data.locations;
const pages = require("../data/data.json").data.pages;

function Footer() {
  return (
    <div id="footer">
      <Container className="footer-main">
        <Row>
          <Col md={12} lg={3} className="footer-col">
            <h3 className="title">Additional Info</h3>
            <div className="content">License Number: {cmi.license.number}</div>
            <div className="content">
              Classes: {cmi.license.classes.join(", ")}
            </div>
            <div className="content">
              Email: <ContactLink data={cmi.email} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <Row>
              {locations.map((location, index) => {
                return (
                  <Col
                    md={12}
                    lg={6}
                    key={index}
                    className="footer-col adr-col"
                  >
                    <Address
                      title={location.title}
                      address={location.address}
                      tel={location.tel}
                      fax={location.fax}
                      key={"address" + index}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={12} lg={3} className="footer-col">
            <h3 className="title">Navigation</h3>
            <div className="sitemap">
              {pages.map((page, index) => {
                if (
                  page.children === undefined ||
                  page.children.length === 0 ||
                  page.name === "Services"
                ) {
                  return (
                    <Sitemap
                      title={page.title}
                      link={
                        page.name === "Home"
                          ? process.env.PUBLIC_URL + page.link
                          : page.link
                      }
                      key={index}
                    />
                  );
                }

                return (
                  <React.Fragment key={index}>
                    <Sitemap title={page.title} link={page.link} key={index} />
                    {page.children.map((child, index) => {
                      return (
                        <Sitemap
                          title={child.title}
                          link={page.link + child.link}
                          key={index}
                          className="child"
                        />
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <UtilityNav
        size="lg"
        info={
          <React.Fragment>
            <div>Copyright © City Mechanical, Inc. All rights reserved.</div>
          </React.Fragment>
        }
        social="circle"
      />
    </div>
  );
}

export default Footer;
