import React from "react";
import "./Header.css";

/**
 * PUBLIC_INTERFACE
 * Header component
 * Displays application title and navigation links.
 */
const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="brand">Recipe Explorer</div>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="#gallery" className="nav-link">Gallery</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
