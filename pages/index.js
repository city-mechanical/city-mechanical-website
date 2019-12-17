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

  const featuredTestimonials = [
    [0, 1],
    [2, 3]
  ];

  return (
    <div id="home">
      <HeroBanner images={pages["home"].banner} />
      <Container className="services">
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
      <Container className="testimonials pt-0">
        <div className="featured">
          <h2 className="title">What Our Customers Say About Us</h2>
          {Object.entries(featuredTestimonials).map(
            ([index, testimonialGroup]) => {
              return (
                <Row className="group-row" key={index}>
                  {Object.entries(testimonialGroup).map(
                    ([index, testimonial]) => {
                      const testimonials =
                        pages["testimonials-page"].testimonials;

                      return (
                        <Col className="group-card" md={6} key={index}>
                          <div
                            className="featured-item"
                            style={{
                              backgroundImage:
                                "url(" + testimonials[testimonial].image + ") "
                            }}
                          >
                            <div className="overlay">
                              <h3 className="title">
                                {testimonials[testimonial].title}
                              </h3>
                              <p className="overview">
                                {testimonials[testimonial].featured}
                              </p>
                              <p className="authour">
                                - {testimonials[testimonial].authour}
                              </p>
                              <Link
                                href={
                                  "/testimonials#" +
                                  testimonials[testimonial].id
                                }
                              >
                                <a className="read-more-btn mt-4">Read More</a>
                              </Link>
                            </div>
                          </div>
                        </Col>
                      );
                    }
                  )}
                </Row>
              );
            }
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
