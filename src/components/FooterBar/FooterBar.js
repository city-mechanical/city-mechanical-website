import React, { Component } from 'react';
import FooterCol from '../FooterCol';

class FooterBar extends Component {
  render() {
    let data = require('../../data/footer.json'); // sample data (GET footer)

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
          <div className="row">
            {render}
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBar;