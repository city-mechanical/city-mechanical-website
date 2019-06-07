import React from 'react';
import ContactBar from './components/ContactBar'
import ContactLink from './components/ContactLink';
import './App.scss'

function App() {
  return (
    <div className="App">
      <ContactBar size='sm'>
        <ContactLink data='1-800-698-6380' icon/>
        <ContactLink data='service@citymechanical.com' icon/>
      </ContactBar>
    </div>
  );
}

export default App;
