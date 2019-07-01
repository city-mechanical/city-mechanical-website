import React, { Component } from 'react';
import NavbarLogo from '../NavbarLogo';

const propTypes = {

};
  
const defaultProps = {

};

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <NavbarLogo/>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;