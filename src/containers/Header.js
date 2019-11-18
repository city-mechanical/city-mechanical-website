import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaTools } from "react-icons/fa";

import ContactLink from "../components/ContactLink";
import UtilityNav from "../components/UtilityNav";
import NavDropdown from "../components/NavDropdown";
import NavDropdownItem from "../components/NavDropdownItem";

const pages = require("../data/pages.json").pages;

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
        <Link to={pages.home.link} className="nav-link">
          <Navbar.Brand>
            <img
              src={process.env.PUBLIC_URL + `/cmi-banner.png`}
              alt="City Mechanical Banner Logo"
              className="navLogo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {/* Home Page */}
            <Link to={pages.home.link} className="nav-link">
              Home
            </Link>
            {/* Service Pages */}
            <NavDropdown
              title={pages.services.title}
              link={pages.services.link}
            >
              <NavDropdownItem
                title={pages.airmaid.title}
                link={pages.airmaid.link}
              />
              <NavDropdownItem
                title={pages.backflowPreventionDeviceCertification.title}
                link={pages.backflowPreventionDeviceCertification.link}
              />
            </NavDropdown>
            {/* Periodic Maintenance Page */}
            <Link to={pages.periodicMaintenance.link} className="nav-link">
              {pages.periodicMaintenance.title}
            </Link>
            {/* About Pages */}
            <NavDropdown title={pages.about.title} link={pages.about.link}>
              <NavDropdownItem
                title={pages.givingBack.title}
                link={pages.givingBack.link}
              />
            </NavDropdown>
            {/* Testimonial Page */}
            <Link to={pages.testimonials.link} className="nav-link">
              {pages.testimonials.title}
            </Link>
            {/* Contact Pages */}
            <NavDropdown title={pages.contact.title} link={pages.contact.link}>
              <NavDropdownItem
                title={pages.staffDirectory.title}
                link={pages.staffDirectory.link}
              />
            </NavDropdown>
            <Link
              to={pages.requestService.link}
              id="service"
              className="nav-link"
            >
              <FaTools style={{ marginBottom: "3px" }} />{" "}
              {pages.requestService.title}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
