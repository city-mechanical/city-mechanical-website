import React from "react";
import Link from "next/link";

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {Object.entries(pages).map(([index, page]) => {
              if (page.children === undefined || page.children.length === 0) {
                return (
                  <Link
                    href={page.link}
                    key={index}
                    children={
                      <a
                        className={
                          page.name === "RequestService"
                            ? "service-nav-link nav-link"
                            : "nav-link"
                        }
                      >
                        {page.name === "RequestService" ? (
                          <React.Fragment>
                            <FaTools style={{ marginBottom: "3px" }} />{" "}
                            {page.title}
                          </React.Fragment>
                        ) : (
                          page.title
                        )}
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
