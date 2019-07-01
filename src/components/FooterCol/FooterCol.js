import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FooterSection from '../FooterSection/FooterSection';

const propTypes = {
  count: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

const defaultProps = {

};

class FooterCol extends Component {
  render() {
    const { count, data } = this.props;
    const render = [];

    for (var i = 0; i < data.sections.length; i++) {
      render.push(
        <FooterSection
          key={i}
          type={data.sections[i].type}
          title={data.sections[i].title}
          content={data.sections[i].content}
        />
      );
    }

    return (
      <div className={`footerCol col-12 col-md-${12/(count/2)} col-lg-${12/count}`}>
        {render}
      </div>
    );
  }
}

FooterCol.propTypes = propTypes;
FooterCol.defaultProps = defaultProps;

export default FooterCol;