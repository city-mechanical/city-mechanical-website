import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../../components/Banner";
import Address from "../../components/Address";
import GoogleMapReact from "google-map-react";

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
      <Banner
        img={contact.banner}
        title={contact.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: contact.title, link: contact.link }
        ]}
      />
      <Container>
        <Row>
          <Col>
            {Object.entries(locations).map(([index, location]) => {
              return (
                <Row key={index}>
                  <Col className="address-map">
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: process.env.GOOGLE_MAPS_API_KEY
                      }}
                      defaultCenter={{
                        lat: location.lat,
                        lng: location.lng
                      }}
                      defaultZoom={15}
                      options={{
                        draggable: true,
                        fullscreenControl: false,
                        zoomControl: true
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
