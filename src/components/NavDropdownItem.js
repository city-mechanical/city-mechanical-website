import React from "react";
import Link from "next/link";

function NavDropdownItem(props) {
  const { title, link } = props;

  return (
    <li className="ndd-item">
      <Link href={link}>
        <a className="nav-link">
          <div className="navdropdown">{title}</div>
        </a>
      </Link>
    </li>
  );
}

export default NavDropdownItem;
