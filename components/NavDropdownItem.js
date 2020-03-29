import React from "react";
import Link from "next/link";

function NavDropdownItem(props) {
  const { title, href, as, onClick } = props;

  return (
    <li className="ndd-item">
      <Link href={href} as={as}>
        <a className="nav-link" onClick={onClick}>
          <div className="navdropdown">{title}</div>
        </a>
      </Link>
    </li>
  );
}

export default NavDropdownItem;
