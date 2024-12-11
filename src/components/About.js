import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="about-image">
          <img
            src="/path-to-your-image.jpg" // Replace with your profile image path
            alt="Profile"
            className="profile-pic"
          />
        </div>

        {/* Right: About Details */}
        <div className="about-details">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hi! I'm <span className="highlight">T.G. Dinoshi Sewwandi</span>, a
            passionate <span className="highlight">Web Developer</span> who loves
            crafting modern and responsive websites. I specialize in creating
            user-friendly, visually appealing web interfaces while keeping up
            with the latest technologies.
          </p>
          <button className="cv-button">
            <a href="/path-to-your-cv.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
