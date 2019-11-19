import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const cmi = require('../data/data.json').data.cmi;

const propTypes = {
  circle: PropTypes.bool,
  type: PropTypes.oneOf(['facebook', 'instagram', 'twitter', 'yelp']).isRequired
};

const defaultProps = {
  circle: false
};

function build(type) {
  switch (type) {
    case 'fb':
    case 'facebook':
      return {
        name: 'facebook',
        icon: <FaFacebookF />,
        link: cmi.social.facebook
      };
    case 'insta':
    case 'instagram':
      return {
        name: 'instagram',
        icon: <FaInstagram />,
        link: cmi.social.instagram
      };
    case 'twitter':
      return {
        name: 'twitter',
        icon: <FaTwitter />,
        link: cmi.social.twitter
      };
    case 'yelp':
      return {
        name: 'yelp',
        icon: <FaYelp />,
        link: cmi.social.yelp
      };
    default:
      return { name: null, icon: null, link: null };
  }
}

function SocialIcon(props) {
  const { circle, type } = props;

  const socialIcon = build(type);
  let classes = `socialIcon ${socialIcon.name}`;

  if (circle) {
    classes += ' circle';
  }

  return (
    <a className={classes} href={socialIcon.link}>
      {socialIcon.icon}
    </a>
  );
}

SocialIcon.propTypes = propTypes;
SocialIcon.defaultProps = defaultProps;

export default SocialIcon;
