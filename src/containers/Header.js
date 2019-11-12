import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaTools } from "react-icons/fa";

import ContactLink from "../components/ContactLink";
import UtilityNav from "../components/UtilityNav";

function Header() {
  return (
    <div id="header">
      <UtilityNav
        size="sm"
        info={
          <React.Fragment>
            <ContactLink data="1-800-698-6380" icon />
            <ContactLink data="service@citymechanical.com" icon />
          </React.Fragment>
        }
        social
      />
      <Navbar collapseOnSelect expand="xxl" className="container" sticky="top">
        <Navbar.Brand href="/">
          <img
            src="https://www.citymechanical.com/wp-content/uploads/2016/12/logo-web-header.png"
            alt="City Mechanical"
            className="navLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Services
            </Link>
            <Link to="/" className="nav-link">
              Periodic Maintenance
            </Link>
            <Link to="/" className="nav-link">
              About
            </Link>
            <Link to="/" className="nav-link">
              Testimonials
            </Link>
            <Link to="/" className="nav-link">
              Contact
            </Link>
            <Link to="/" id="service" className="nav-link">
              <FaTools style={{ marginBottom: "3px" }} /> Request
              Service/Estimate
            </Link>
            {/* <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
