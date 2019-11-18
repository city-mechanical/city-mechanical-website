import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

const propTypes = {};

const defaultProps = {};

function NavDropdown(props) {
  const { title, link, children } = props;

  return (
    <div className="navdropdown">
      <Link to={link} className="nav-link ndd">
        <div>
          {/* {children ? <IoMdArrowDropright className="ndd-icon" /> : null} */}
          <IoMdArrowDropright className="ndd-icon" />
          {title}
        </div>
      </Link>
      <div className="ndd-shadowfix"></div>
      <ul className="ndd-menu">{children}</ul>
    </div>
  );
}

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;
