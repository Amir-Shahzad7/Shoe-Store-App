import React from "react";
import "./Footer.css";
import {IconButton} from "@material-ui/core"
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="Column1">
          <h5 className="Heading">COMPANY</h5>
          <ul className="List">
            <li>World of Nike</li>
            <li>Careers</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="Column2">
          <h5 className="Heading">LEGAL AREA</h5>
          <ul className="List">
            <li>Terms and Conditions of Sale</li>
            <li>Return and Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Column3">
          <h5 className="Heading">SOCIAL</h5>
          <ul className="SocialList">
            <li><IconButton aria-label="facebook" style={{color: "#7e7e7e"}}><Facebook /></IconButton></li>
            <li><IconButton aria-label="instagram" style={{color: "#7e7e7e"}}><Instagram /></IconButton></li>
            <li><IconButton aria-label="twitter" style={{color: "#7e7e7e"}}><Twitter /></IconButton></li>
          </ul>
        </div>
      </div>
      <div className="Bottom">
        <p>
          &copy;{new Date().getFullYear()} Nike, Inc | All Rights Reserved |
          Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
