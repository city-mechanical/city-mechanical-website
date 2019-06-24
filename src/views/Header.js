import React from 'react';
import ContactBar from '../components/ContactBar'
import ContactLink from '../components/ContactLink';
import Navbar from '../components/Navbar';
import SocialIcon from '../components/SocialIcon/SocialIcon';

function Header() {
  return (
    <React.Fragment>
      <ContactBar 
        size='sm'
        info={
          <React.Fragment>
            <ContactLink data='1-800-698-6380' icon/>
            <ContactLink data='service@citymechanical.com' icon/>
          </React.Fragment>
        }
        social={
          <React.Fragment>
            <SocialIcon type='twitter'/>
            <SocialIcon type='facebook'/>
            <SocialIcon type='instagram'/>
            <SocialIcon type='yelp'/>
          </React.Fragment>
        }
      />
      <Navbar />
    </React.Fragment>
  );
}

export default Header;
