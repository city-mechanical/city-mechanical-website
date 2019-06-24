import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarLogo from '../NavbarLogo';

const propTypes = {

};
  
const defaultProps = {

};

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <div class="container">
          <NavbarLogo/>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;