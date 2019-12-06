import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaTools } from "react-icons/fa";

import ContactLink from "../components/ContactLink";
import UtilityNav from "../components/UtilityNav";
import NavDropdown from "../components/NavDropdown";
import NavDropdownItem from "../components/NavDropdownItem";

const cmi = require("../data/data.json").data.cmi;
const pages = require("../data/data.json").data.pages;

function Header() {
  return (
    <div id="header">
      <UtilityNav
        size="sm"
        info={
          <React.Fragment>
            <ContactLink data={cmi.phone} icon />
            <ContactLink data={cmi.email} icon />
          </React.Fragment>
        }
        social
      />
      <Navbar collapseOnSelect expand="xxl" className="container" sticky="top">
        <Link
          to={process.env.PUBLIC_URL + pages[0].link}
          className="nav-link brand"
        >
          <Navbar.Brand>
            <img
              src={process.env.PUBLIC_URL + `/images/cmi-logo.png`}
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
                    to={
                      page.name === "Home"
                        ? process.env.PUBLIC_URL + page.link
                        : page.link
                    }
                    className={
                      page.name === "RequestService"
                        ? "service-nav-link nav-link"
                        : "nav-link"
                    }
                    children={
                      page.name === "RequestService" ? (
                        <React.Fragment>
                          <FaTools style={{ marginBottom: "3px" }} />{" "}
                          {page.title}
                        </React.Fragment>
                      ) : (
                        page.title
                      )
                    }
                    key={index}
                  />
                );
              } else {
                return (
                  <NavDropdown
                    title={page.title}
                    link={
                      page.name === "Home"
                        ? process.env.PUBLIC_URL + page.link
                        : page.link
                    }
                    key={index}
                    css={page.name === "Services" ? "col2" : ""}
                    children={page.children.map((child, index) => {
                      return (
                        <NavDropdownItem
                          title={child.title}
                          link={page.link + child.link}
                          key={index}
                        />
                      );
                    })}
                  />
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
