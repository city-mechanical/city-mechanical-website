import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // color: PropTypes.,
  icons: PropTypes.element,
  links: PropTypes.element,
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
  links: null,
  size: 'md',
};

class ContactBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { links, icons, size } = this.props;
    
    return (
      <div className={`contactBar contactBar-${size} appad`} >
        <div className='links'>
          {links}
        </div>
        <div className='icons'>
          {icons}
        </div>
      </div>
    );
  }
}

ContactBar.propTypes = propTypes;
ContactBar.defaultProps = defaultProps;

export default ContactBar;