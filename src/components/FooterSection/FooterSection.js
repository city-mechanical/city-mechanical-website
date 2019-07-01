import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.oneOf([
      'misc',
      'location',
      'sitemap',
  ]),
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};
  
const defaultProps = {
  type: "misc",
  title: "",
};

class FooterSection extends Component {
  constructor(props) {
    super(props);
    this.buildSitemap = this.buildSitemap.bind(this);
  }

  buildSitemap(content) {
    return content;
  }

  render() {
    const { type, title, content } = this.props;
    return (
      <div className="footerSection">
        <div className="title">{title}</div>
        {type === "sitemap" ? (
          <div className="content">{this.buildSitemap(content)}</div>
        ) : (
          <div className="content">{content}</div>
        )}
      </div>
    );
  }
}

FooterSection.propTypes = propTypes;
FooterSection.defaultProps = defaultProps;

export default FooterSection;