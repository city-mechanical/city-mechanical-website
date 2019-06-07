import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // color: PropTypes.,
  size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
  ]),
};
  
const defaultProps = {
  size: 'md',
};

class ContactBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { children, size } = this.props;
    
    return (
      <div className={'contactBar contactBar-' + size} >
          {children}
      </div>
    );
  }
}

ContactBar.propTypes = propTypes;
ContactBar.defaultProps = defaultProps;

export default ContactBar;