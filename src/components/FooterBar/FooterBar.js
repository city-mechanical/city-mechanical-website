import React, { Component } from 'react';
import FooterCol from '../FooterCol';
import SitemapBtn from '../SitemapBtn';

class FooterBar extends Component {
  render() {
    let data = require('./data.json'); // sample data

    const render = [];

    for (var i = 0; i < data.footer.cols.length; i++) {
      render.push(
        <FooterCol 
          key={i} 
          data={data.footer.cols[i]} 
          count={data.footer.cols.length} 
        />
      );
    }

    return (
      <div className="footerBar">
        <div className="container">
          {render}
        </div>
      </div>
    );
  }
}

export default FooterBar;