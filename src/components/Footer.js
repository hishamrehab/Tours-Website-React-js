import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer" id="footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <ul>
            <li>Project</li>
            <li>Changing</li>
            <li>Status</li>
            <li>License</li>
            <li>All Versions</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help</li>
            <li>Support</li>
            <li>Troubleshooting</li>
            <li>Contact Us</li>
         
          </ul>
        </div>
        <div>
          <ul>
            <li>Other</li>
            <li>Terms of Service</li>
            <li>Privacy Policy </li>
            <li>License</li>
            
          </ul>
        </div>
      </div>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
