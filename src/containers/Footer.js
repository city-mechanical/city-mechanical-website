import React from 'react';
import ContactBar from '../components/ContactBar';
import FooterBar from '../components/FooterBar';
import SocialIcon from '../components/SocialIcon/SocialIcon';

function Footer() {
  return (
    <div id="footer">
      <FooterBar />
      <ContactBar
        size='lg'
        info={
          <React.Fragment>
            <div>Copyright © City Mechanical, Inc. All rights reserved.</div>
            {/* <a href="https://github.com/CrutchTheClutch">Designed by William Crutchfield</a> */}
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
    </div>
  );
}

export default Footer;
