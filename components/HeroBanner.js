import React from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function HeroBanner(props) {
  const { titles, images, size } = props;

  return (
    <React.Fragment>
      <Carousel className={`hero-banner ${size ? "size-" + size : "size-lg"}`}>
        {Object.entries(images).map(([index, image]) => {
          return (
            <Carousel.Item
              key={index}
              style={{ backgroundImage: "url(" + image + ")" }}
            >
              {/* <Image src={image} fluid /> */}
            </Carousel.Item>
          );
        })}
        <div className="overlay" />
        <div className="content">
          <h1 className="banner-title">City Mechanical, Inc.</h1>
          <div className="banner-subtitle">
            Serving San Francisco and the Bay Area since 1989
          </div>
        </div>
      </Carousel>
    </React.Fragment>
  );
}

export default HeroBanner;
