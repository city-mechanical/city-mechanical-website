import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};
  
const defaultProps = {

};

class NavbarLogo extends Component {
  render() {
    return (
      <a class="navbarLogo" href="/">
        <img src="https://www.citymechanical.com/wp-content/uploads/2016/12/logo-web-header.png" alt="City Mechanical"/>
      </a>
    );
  }
}

NavbarLogo.propTypes = propTypes;
NavbarLogo.defaultProps = defaultProps;

export default NavbarLogo;