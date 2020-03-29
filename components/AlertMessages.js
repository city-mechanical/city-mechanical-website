import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosWarning } from "react-icons/io";

const propTypes = {};

const defaultProps = {};

function AlertMessages(props) {
  const {} = props;

  return (
    <Container className="alert-messages">
      <Row className="group-row">
        <Col className="group-card" md={6}>
          <div className="emergency-service">
            <span className="alert alert-warning">
              <IoIosWarning className="alert-icon" /> Alert
            </span>
            <h2 className="title">24 HOUR EMERGENCY SERVICE</h2>
            <p className="message-large">
              <span className="highlight">+1 (800) 698-6380</span>
            </p>
            <a href="tel:+18006986380">
              <span className="link-spanner"></span>
            </a>
          </div>
        </Col>
        <Col className="group-card" md={6}>
          <div className="emergency-service">
            <span className="alert alert-danger">
              <IoIosWarning className="alert-icon" /> Alert
            </span>
            <h2 className="title">COVID-19 PREVENTION PROGRAM</h2>
            <p className="message">
              Click <span className="highlight">HERE</span> to read about how we
              are taking precautions and the necessary steps in an effort to
              combat the spread of COVID-19 in our community.
            </p>
            <a
              href={
                "/pdfs/CMI%20-%20COVID%2019%20Pandemic%20Prevention%20Program.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="link-spanner"></span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

AlertMessages.propTypes = propTypes;
AlertMessages.defaultProps = defaultProps;

export default AlertMessages;
