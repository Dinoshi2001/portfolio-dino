import React from "react";
import "../css/Home.css";
import profileImage from "../images/profile.jpg"; // Correct image import
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left: Typing Text */}
        <div className="home-text">
          <h1 className="greeting">Hello, I'm</h1>
          <h1 className="name">T.G. Dinoshi Sewwandi</h1>
          <h2 className="typing">
            I am a{" "}
            <span className="typewriter-text">
              <Typewriter
                words={["Web Developer.", "Undergraduate.", "Software Engineer Enthusiast."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="description">
            I create beautiful, responsive websites and user-friendly designs.
          </p>
          <button className="home-btn">
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        {/* Right: Profile Image */}
        <div className="home-image">
          <img
            src={profileImage} // Use the imported image here
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
