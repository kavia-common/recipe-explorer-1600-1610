import React from "react";
import "./Footer.css";

/**
 * PUBLIC_INTERFACE
 * Footer component for bottom-of-page links and copyright.
 */
const Footer = () => (
  <footer className="footer">
    <span>
      &copy; {new Date().getFullYear()} Recipe Explorer &mdash; Modern Minimal Recipe App &middot; <a href="#about">About</a>
    </span>
  </footer>
);

export default Footer;
