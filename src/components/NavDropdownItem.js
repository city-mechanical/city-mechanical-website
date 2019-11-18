import React from "react";
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

function NavDropdownItem(props) {
  const { title, link } = props;

  return (
    <li className="ndd-item">
      <Link to={link} className="nav-link">
        <div className="navdropdown">{title}</div>
      </Link>
    </li>
  );
}

NavDropdownItem.propTypes = propTypes;
NavDropdownItem.defaultProps = defaultProps;

export default NavDropdownItem;
