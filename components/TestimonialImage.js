import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";

function TestimonialImage(props) {
  const { img, title } = props;

  return (
    <div
      className="testimonial-image"
      style={{ backgroundImage: "url(" + img + ") " }}
    >
      <div className="testimonial-image-overlay">
        <h2 className="testimonial-image-title">{title}</h2>
      </div>
    </div>
  );
}

export default TestimonialImage;
