import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../../components/Banner";
import Address from "../../components/Address";
import Form from "../../components/Form";
import AlertMessages from "../../components/AlertMessages";
import GoogleMapReact from "google-map-react";
import { NextSeo } from "next-seo";

function Contact() {
  const pages = require("../../data/data.json").data.pages;
  const contact = pages["contact"];
  const locations = require("../../data/data.json").data.locations;

  const MapMarker = () => (
    <img
      className="marker"
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
    />
  );

  return (
    <div id="contact">
      <NextSeo title={contact.metaTitle} description={contact.metaDesc} />
      <Banner
        img={contact.banner}
        title={contact.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: contact.title, link: contact.link },
        ]}
      />
      <AlertMessages />
      <Container>
        <Form
          title="Thank You For Visiting City Mechanical"
          desc="We hope that you like what we, City Mechanical, are all about! To the
          right is the form to contact us. So, if you would like an estimate for
          one of our services, please head over to the Request Service page.
          Likewise, to schedule an appointment, the Request Service page is for
          you. Otherwise, if you would like to ask us any general questions, be
          sure to fill out the form to the right. Likewise, if you have any
          comments related to the website or our services, you should fill out
          this form. Thank you for considering City Mechanical for your HVAC
          needs. We hope to serve you in the future!"
          formURL="https://form.jotform.com/200517384689060"
        />
        <Row>
          <Col>
            {Object.entries(locations).map(([index, location]) => {
              return (
                <Row key={index}>
                  <Col className="address-map">
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: process.env.GOOGLE_MAPS_API_KEY,
                      }}
                      defaultCenter={{
                        lat: location.lat,
                        lng: location.lng,
                      }}
                      defaultZoom={15}
                      options={{
                        draggable: true,
                        fullscreenControl: false,
                        zoomControl: true,
                      }}
                    >
                      <MapMarker lat={location.lat} lng={location.lng} />
                    </GoogleMapReact>
                    <Address
                      title={location.title}
                      address={location.address}
                      tel={location.tel}
                      fax={location.fax}
                      key={"address" + index}
                    />
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
