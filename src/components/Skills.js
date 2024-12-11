import React from "react";
import "../css/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Section Title */}
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {/* Technical Skills Section */}
        <div className="skills-block">
          <h3 className="skills-heading">Technical Skills</h3>
          <div className="progress-bar">
            <label>HTML</label>
            <div className="bar">
              <div className="fill html-fill"></div>
            </div>
          </div>
          <div className="progress-bar">
            <label>CSS</label>
            <div className="bar">
              <div className="fill css-fill"></div>
            </div>
          </div>
          <div className="progress-bar">
            <label>JavaScript</label>
            <div className="bar">
              <div className="fill js-fill"></div>
            </div>
          </div>
          <div className="progress-bar">
            <label>React</label>
            <div className="bar">
              <div className="fill react-fill"></div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="skills-block">
          <h3 className="skills-heading">Soft Skills</h3>
          <div className="soft-skills-container">
            <div className="skill-ring">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle
                  className="background-circle"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="progress-circle teamwork"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
              </svg>
              <div className="skill-label">Teamwork</div>
            </div>
            <div className="skill-ring">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle
                  className="background-circle"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="progress-circle communication"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
              </svg>
              <div className="skill-label">Communication</div>
            </div>
            <div className="skill-ring">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle
                  className="background-circle"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="progress-circle problem-solving"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
              </svg>
              <div className="skill-label">Problem-Solving</div>
            </div>
            <div className="skill-ring">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle
                  className="background-circle"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="progress-circle time-management"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
              </svg>
              <div className="skill-label">Time Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
