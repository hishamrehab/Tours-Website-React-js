import React from "react";
import logo from "../images/nav-logo.jpg";
import { socialLinks, pageLinks } from "../data";
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div
          className="nav-header"
          style={{
            width: "70px",
            height: "70px",
          }}
        >
          <a href="#">
            <img
              src={logo}
              className="nav-logo"
              alt="landingPage"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLinks key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
