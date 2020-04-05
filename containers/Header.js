import React, { useState } from "react";
import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaTools } from "react-icons/fa";

import ContactLink from "../components/ContactLink";
import UtilityNav from "../components/UtilityNav";
import NavDropdown from "../components/NavDropdown";
import NavDropdownItem from "../components/NavDropdownItem";
import TextLoop from "react-text-loop";

const cmi = require("../data/data.json").data.cmi;
const pages = require("../data/data.json").data.pages;

function Header() {
  const [expanded, setExpanded] = useState(false);

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
      <Navbar
        expanded={expanded}
        expand="xxl"
        className="container"
        sticky="top"
      >
        <Link href="/" as={"/"}>
          <a className="nav-link brand">
            <Navbar.Brand>
              <img
                src={"/images/cmi-logo.png"}
                alt="City Mechanical Banner Logo"
                className="navLogo"
              />
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {Object.entries(pages).map(([index, page]) => {
              if (page.title === "Request Service") {
                return (
                  <div className="nav-container service-nav-container">
                    <Link
                      href={page.link}
                      key={index}
                      children={
                        <a
                          className={"service-nav-link nav-link"}
                          onClick={() => setExpanded(false)}
                        >
                          <React.Fragment>
                            <FaTools style={{ marginBottom: "3px" }} />
                            {" Request "}
                            <TextLoop interval={[10000, 3000, 3000, 3000]}>
                              <span>Service</span>
                              <span>Estimate</span>
                              <span>Repair</span>
                              <span>Maintenance</span>
                            </TextLoop>
                          </React.Fragment>
                        </a>
                      }
                    />
                  </div>
                );
              } else if (
                page.children === undefined ||
                page.children.length === 0
              ) {
                return (
                  <Link
                    href={page.link}
                    key={index}
                    children={
                      <a
                        className={"nav-link"}
                        onClick={() => setExpanded(false)}
                      >
                        {page.title}
                      </a>
                    }
                  />
                );
              } else {
                return (
                  <NavDropdown
                    title={page.title}
                    link={page.link}
                    key={index}
                    css={page.title === "Services" ? "col2" : ""}
                    onClick={() => setExpanded(false)}
                    children={Object.entries(page.children).map(
                      ([index, child]) => {
                        return (
                          <NavDropdownItem
                            title={child.title}
                            href={
                              page.title === "Services"
                                ? page.link + "/[name]"
                                : page.link + child.link
                            }
                            as={page.link + child.link}
                            key={index}
                            onClick={() => setExpanded(false)}
                          />
                        );
                      }
                    )}
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
