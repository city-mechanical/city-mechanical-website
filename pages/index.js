import React from "react";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import AlertMessages from "../components/AlertMessages";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NextSeo } from "next-seo";

const pages = require("../data/data.json").data.pages;

function Home() {
  const featuredServices = [
    ["hvac", "refrigeration"],
    ["plumbing", "building-controls-energy-management"],
  ];

  const featuredTestimonials = [
    [0, 1],
    [2, 3],
  ];

  return (
    <div id="home">
      <NextSeo
        title="City Mechanical, Inc. - HVAC, Refrigeration, Plumbing & More"
        description="City Mechanical has been delivering the highest level of specialized commercial HVAC services to San Francisco and the Greater Bay Area for over 26 years."
      />
      <HeroBanner images={pages["home"].banner} />
      <AlertMessages />
      <Container className="about">
        <div className="featured">
          <h2 className="title">Climate Control for Bay Area Environments</h2>
          <p className="overview">
            We’ve delivered the highest level of specialized commercial HVAC
            services to San Francisco and the Greater Bay Area since 1989. Our
            specialists never stop training because your needs never stop
            growing. We’ll optimize existing equipment or assist you in an
            upgrade or retrofit, and teach you how to maintain a clean,
            efficient environment. Our specialty is speed and outstanding
            service always delivered with our evergreen brand of honesty and
            integrity.
          </p>
        </div>
      </Container>
      <Container className="services">
        <div className="featured">
          <h2 className="title">Our Services</h2>
          {Object.entries(featuredServices).map(([index, serviceGroup]) => {
            return (
              <Row className="group-row" key={index}>
                {Object.entries(serviceGroup).map(([index, service]) => {
                  const services = pages["services"];

                  return (
                    <Col className="group-card" md={6} key={index}>
                      <div className="featured-item">
                        <h3 className="title">
                          {services.children[service].title}
                        </h3>
                        <p className="overview">
                          {services.children[service].overview[1]}
                        </p>
                        <Link
                          href={services.link + "/[name]"}
                          as={services.link + services.children[service].link}
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
                                "url(" + testimonials[testimonial].image + ") ",
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
