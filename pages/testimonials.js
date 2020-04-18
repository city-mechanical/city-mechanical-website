import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";
import TestimonialImage from "../components/TestimonialImage";
import { NextSeo } from "next-seo";

function getImage(index, testimonial, className) {
  return (
    <Col
      key={index}
      md={12}
      lg={6}
      className={"testimonial-image-col " + className}
    >
      <TestimonialImage img={testimonial.image} title={testimonial.title} />
    </Col>
  );
}

function Testimonials() {
  const pages = require("../data/data.json").data.pages;
  const testimonialsPage = pages["testimonials-page"];
  const testimonials = testimonialsPage.testimonials;

  return (
    <div id="testimonials">
      <NextSeo
        title={testimonialsPage.metaTitle}
        description={testimonialsPage.metaDesc}
      />
      <Banner
        img={testimonialsPage.banner}
        title={testimonialsPage.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          {
            title: testimonialsPage.title,
            link: testimonialsPage.link,
          },
        ]}
      />

      {Object.entries(testimonials).map(([index, testimonial]) => {
        let content = (
          <Col md={12} lg={6} className="testimonial-content-col">
            <div className="testimonial-content">
              {Object.entries(testimonials[index].content).map(([index, p]) => {
                return (
                  <p key={index} className={p.accented ? "accented" : "quote"}>
                    {p.text}
                  </p>
                );
              })}
            </div>
            <p className="authour">- {testimonial.authour}</p>
          </Col>
        );

        let el = (
          <Container id={testimonial.id} className="testimonial" key={index}>
            <Row>
              {index % 2 === 0 ? (
                <React.Fragment>
                  {getImage(index, testimonial, "t-pad-bottom")}
                  {content}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {content}
                  {getImage(index, testimonial, "")}
                </React.Fragment>
              )}
            </Row>
          </Container>
        );

        return el;
      })}
    </div>
  );
}

export default Testimonials;
