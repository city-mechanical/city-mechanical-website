import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
  
const defaultProps = {

};

class SitemapBtn extends Component {
  render() {
    const { name } = this.props;

    return (
      <a href={this.props.link} className="sitemapBtn">
        {name}
      </a>
    );
  }
}

SitemapBtn.propTypes = propTypes;
SitemapBtn.defaultProps = defaultProps;

export default SitemapBtn;