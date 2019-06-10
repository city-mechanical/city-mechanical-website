import React from 'react';
import ContactBar from '../components/ContactBar'
import ContactLink from '../components/ContactLink';
import SocialIcon from '../components/SocialIcon/SocialIcon';

function Footer() {
  return (
    <ContactBar 
      size='lg'
      info={
        <React.Fragment>
          <div>© Copyright - City Mechanical, Inc.</div>
        </React.Fragment>
      }
      social={
        <React.Fragment>
          <SocialIcon type='twitter' circle/>
          <SocialIcon type='facebook' circle/>
          <SocialIcon type='instagram' circle/>
          <SocialIcon type='yelp' circle/>
        </React.Fragment>
      }
    />
  );
}

export default Footer;
