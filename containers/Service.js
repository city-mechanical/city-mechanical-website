import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";
import { NextSeo } from "next-seo";

function Service(props) {
  const {
    title,
    banner,
    overview,
    breadcrumbs,
    buttonText,
    metaTitle,
    metaDesc,
    children,
  } = props;

  return (
    <div id="service">
      <NextSeo title={metaTitle} description={metaDesc} />
      <Banner img={banner} title={title} breadcrumbs={breadcrumbs} />
      <Container>
        <Row>
          <Col md={12} lg={6} className="service-overview">
            <h2 className="title">Service Overview</h2>
            {overview.map((p, index) => {
              return <p key={index}>{p}</p>;
            })}
            <Link href={"/request-service"}>
              <a className={"service-button request-service"}>
                {buttonText ? buttonText : "Request Service"}
              </a>
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

export default Service;
