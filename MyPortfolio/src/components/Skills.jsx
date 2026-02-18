import React from 'react';

const Skills = () => {
  return (
    <section className="content-section active" id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-python"></i>
                </div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-java"></i>
                </div>
                <span className="skill-name">Core Java</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web Technologies</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <span className="skill-name">CSS</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-js"></i>
                </div>
                <span className="skill-name">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-items">
              <div class="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <span className="skill-name">SQL</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="skill-name">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-git-alt"></i>
                </div>
                <span className="skill-name">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
