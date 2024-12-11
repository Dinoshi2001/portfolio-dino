import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a> {/* Fixing Contact link to the correct ID */}
      </div>
    </div>
  );
};

export default Header;
