import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const propTypes = {
  circle: PropTypes.bool,
  type: PropTypes.oneOf([
    'facebook',
    'instagram',
    'twitter',
    'yelp',
  ]).isRequired,
};

const defaultProps = {
  circle: false,
};

class SocialIcon extends Component {
  constructor(props) {
    super(props);
    this.build = this.build.bind(this);
  }

  build() {
    const { type } = this.props;

    switch(type) {
      case 'fb':
      case 'facebook':
        return {
          name: 'facebook',
          icon: <FaFacebookF/>,
          link: 'https://www.facebook.com/CityMechanicalInc/'
        };
      case 'insta':
      case 'instagram':
        return {
          name: 'instagram',
          icon: <FaInstagram/>,
          link: 'https://www.instagram.com/citymechanical_inc/'
        };
      case 'twitter':
        return {
          name: 'twitter',
          icon: <FaTwitter/>,
          link: 'https://twitter.com/City_Mechanical'
        };
      case 'yelp':
        return {
          name: 'yelp',
          icon: <FaYelp/>,
          link: 'https://www.yelp.com/biz/city-mechanical-hercules'
        };
      default:
        return {name: null, icon: null, link: null};
    }
  }

  render() {
    const socialIcon = this.build();

    return (
      <a className={`socialIcon ${socialIcon.name}`} href={socialIcon.link}>
        {socialIcon.icon}
      </a>
    );
  }
}

SocialIcon.propTypes = propTypes;
SocialIcon.defaultProps = defaultProps;

export default SocialIcon;