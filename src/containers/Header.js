import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaTools } from "react-icons/fa";

import ContactLink from "../components/ContactLink";
import UtilityNav from "../components/UtilityNav";
import NavDropdown from "../components/NavDropdown";
import NavDropdownItem from "../components/NavDropdownItem";

const pages = require("../data/pages.json").data.pages;

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
        <Link to={pages[0].link} className="nav-link">
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
            {pages.map((page, index) => {
              if (page.children === undefined || page.children.length === 0) {
                return (
                  <Link
                    to={page.link}
                    className="nav-link"
                    children={page.title}
                    key={index}
                  />
                );
              } else {
                return (
                  <NavDropdown
                    title={page.title}
                    link={page.link}
                    classes={page.classes}
                    key={index}
                    children={page.children.map((child, index) => {
                      return (
                        <NavDropdownItem
                          title={child.title}
                          link={child.link}
                          key={index}
                        />
                      );
                    })}
                  />
                );
              }
            })}
            {/* <Link
              to={pages.requestService.link}
              id="service"
              className="nav-link"
            >
              <FaTools style={{ marginBottom: "3px" }} />{" "}
              {pages.requestService.title}
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
