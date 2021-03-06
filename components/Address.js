import React from "react";
import ContactLink from "./ContactLink";

const cmi = require("../data/data.json").data.cmi;

const propTypes = {};

const defaultProps = {};

function Address(props) {
  const { title, address, tel, fax } = props;

  const adr = address.split("\n");

  return (
    <div className="address">
      <h3 className="title">{title}</h3>
      <address className="content">
        {adr[0]}
        <br />
        {adr[1]}
      </address>
      <div className="content">
        Tel: <ContactLink data={tel} />
      </div>
      <div className="content">
        Fax: <ContactLink data={fax} customType="fax" />
      </div>
      <div className="content">
        Service: <ContactLink data={cmi.phone} />
      </div>
    </div>
  );
}

Address.propTypes = propTypes;
Address.defaultProps = defaultProps;

export default Address;
