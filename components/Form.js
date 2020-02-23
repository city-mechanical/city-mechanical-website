import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JotformEmbed from "react-jotform-embed";

const propTypes = {};

const defaultProps = {};

function Form(props) {
  const { title, desc, formURL } = props;
  const [loading, setLoading] = useState(true);

  return (
    <Row>
      <Col md={12} lg={6}>
        <h2 className="title">{title}</h2>
        <p>{desc}</p>
      </Col>
      <Col md={12} lg={6}>
        <div className="formContainer">
          <JotformEmbed
            class={loading ? "form-loading" : ""}
            src={formURL}
            onLoad={() => setLoading(false)}
          />
        </div>
      </Col>
    </Row>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
