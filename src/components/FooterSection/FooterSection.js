import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactLink from '../ContactLink'
import SitemapBtn from '../SitemapBtn';

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
    this.convertToSlug = this.convertToSlug.bind(this);
  }

  buildSitemap(content) {
    var sitemap = [];

    for (var i = 0; i < content.split("\n").length; i++) {
      var name = content.split("\n")[i];
      var slug = this.convertToSlug(name);
      var homepage = 'https://www.citymechanical.com/';
      // var homepage = 'https://crutchtheclutch.github.io/CityMechanical-Website/';
      var link;

      // Custom Sitemap Slugs (Business Logic)
      switch(slug){
        case 'home':
          link = homepage;
          break;
        case 'air-maid':
          link = `${homepage}airmaid`;
          break;
        case 'boilers-boiler-certification':
          link = `${homepage}boilers`;
          break;
        case 'heating-ventilation-air-conditioning':
          link = `${homepage}hvac`;
          break;
        case 'request-service-estimate':
            link = `${homepage}request-service`;
            break;
        case 'saunas':
          link = `${homepage}sauna`;
          break;
        default:
          link = `${homepage}${slug}/`;
      }

      sitemap.push(
        <SitemapBtn
          key={i}
          name={name}
          link={link}
        />
      );
    }

    return sitemap;
  }

  convertToSlug(title) {
    return title.toLowerCase().replace(/[/ ]/g,'-').replace(/[^\w-]+/g,'').replace(/[-]+/g, '-');
  }

  render() {
    const { type, title, content } = this.props;

    return (
      <div className={`footerSection ${this.convertToSlug(title).substring(0,8)}-section`}>
        <div className="title">{title}</div>
        {type === "sitemap" ? (
          <div className="content sitemap">{this.buildSitemap(content)}</div>
        ) : (
          <div className="content">{
            <React.Fragment>
              <div>{content}</div>
              {/* <ContactLink data='1-800-698-6380' icon spacing='md'/>
              <ContactLink data='service@citymechanical.com' icon spacing='md'/> */}
            </React.Fragment>}
          </div>
        )}
      </div>
    );
  }
}

FooterSection.propTypes = propTypes;
FooterSection.defaultProps = defaultProps;

export default FooterSection;