import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

function NavDropdown(props) {
  const { title, link, css, children } = props;

  return (
    <div className="navdropdown">
      <Link href={link} as={link}>
        <a className="nav-link ndd">
          <IoMdArrowDropright className="ndd-icon" />
          {title}
        </a>
      </Link>
      <div className="ndd-shadowfix"></div>
      <ul className={"ndd-menu " + css}>{children}</ul>
    </div>
  );
}

export default NavDropdown;
