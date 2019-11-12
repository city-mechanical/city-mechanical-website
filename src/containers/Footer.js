import React from "react";
import UtilityNav from "../components/UtilityNav";

function Footer() {
  return (
    <div id="footer">
      <UtilityNav
        size="lg"
        info={
          <React.Fragment>
            <div>Copyright © City Mechanical, Inc. All rights reserved.</div>
          </React.Fragment>
        }
        social="circle"
      />
    </div>
  );
}

export default Footer;
