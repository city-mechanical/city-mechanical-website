import React from "react";

const propTypes = {};

const defaultProps = {};

function Nav(props) {
  return (
    <div className="nav">
      <div className="container">
        <a className="navLogo" href="/">
          <img
            src="https://www.citymechanical.com/wp-content/uploads/2016/12/logo-web-header.png"
            alt="City Mechanical"
          />
        </a>
      </div>
    </div>
  );
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
