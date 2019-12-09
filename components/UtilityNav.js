import React from "react";
import PropTypes from "prop-types";

import SocialIcon from "./SocialIcon";

const propTypes = {
  info: PropTypes.element,
  social: PropTypes.oneOf([false, true, "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
};

const defaultProps = {
  size: "md",
  social: undefined
};

function UtilityNav(props) {
  const { size, info, social } = props;

  return (
    <div className={`utilityNav utilityNav-${size}`}>
      <div className="container">
        <div className="info">{info}</div>
        {social ? (
          <div className="social">
            <SocialIcon
              type="twitter"
              circle={social === "circle" ? true : false}
            />
            <SocialIcon
              type="facebook"
              circle={social === "circle" ? true : false}
            />
            <SocialIcon
              type="instagram"
              circle={social === "circle" ? true : false}
            />
            <SocialIcon
              type="yelp"
              circle={social === "circle" ? true : false}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

UtilityNav.propTypes = propTypes;
UtilityNav.defaultProps = defaultProps;

export default UtilityNav;
