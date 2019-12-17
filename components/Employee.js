import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAddressCard, FaMobile, FaTty, FaRegEnvelope } from "react-icons/fa";
import ContactLink from "../components/ContactLink";

function Employee(props) {
  const { img, name, title, email, work, cell } = props;
  const [expanded, setExpanded] = useState(true);

  let contactInfo = (
    <React.Fragment>
      <Row noGutters>
        <Col xs={12}>
          <p className="title">{title}</p>
        </Col>
      </Row>
      {email ? (
        <Row noGutters>
          <Col xs={3}>{"Email: "}</Col>
          <Col xs={9}>
            <ContactLink data={email} />
          </Col>
        </Row>
      ) : null}
      {work ? (
        <Row noGutters>
          <Col xs={3}>{"Office: "}</Col>
          <Col xs={9}>
            <ContactLink data={work} />
          </Col>
        </Row>
      ) : null}

      {cell ? (
        <Row noGutters>
          <Col xs={3}>{"Cell: "}</Col>
          <Col xs={9}>
            <ContactLink data={cell} />
          </Col>
        </Row>
      ) : null}
    </React.Fragment>
  );

  return (
    <div id={name} className="employee">
      <div
        className="employee-image"
        style={{ backgroundImage: "url(" + img + ") " }}
      >
        <div className={expanded ? "employee-info" : "employee-info expanded"}>
          <Row noGutters>
            <Col xs={8}>
              <h3 className="employee-name">{name}</h3>
            </Col>
            <Col xs={4}>
              <Button
                variant="primary"
                className="employee-toggle-info"
                onClick={() => setExpanded(!expanded)}
              >
                <FaAddressCard /> {expanded ? "Show" : "Hide"}
              </Button>
            </Col>
          </Row>
          <div
            className={
              expanded ? "employee-more-info" : "employee-more-info expanded"
            }
          >
            {expanded ? null : contactInfo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
