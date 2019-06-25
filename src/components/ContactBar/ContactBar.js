import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  info: PropTypes.element,
  social: PropTypes.element,
  size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
  ]),
};
  
const defaultProps = {
  icons: null,
  info: null,
  size: 'md',
};

class ContactBar extends Component {
  render() {
    const { social, info, size } = this.props;
    
    return (
      <div className={`contactBar contactBar-${size}`} >
        <div className="container">
          {info ? (
            <div className='info'>
              {info}
            </div>
          ) : (
            null
          )}

          {social ? (
            <div className='social'>
              {social}
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    );
  }
}

ContactBar.propTypes = propTypes;
ContactBar.defaultProps = defaultProps;

export default ContactBar;