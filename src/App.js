import React from 'react';
import PropTypes from 'prop-types';
import Header from './views/Header'
import Footer from './views/Footer'
import './App.scss'

const propTypes = {
  
};

const defaultProps = {
  
};

function App() {
  return (
    <div className='App'>
      <Header/>
      <Footer/>
    </div>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
