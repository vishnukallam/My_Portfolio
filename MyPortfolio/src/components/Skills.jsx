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
                  <i className="devicon-python-plain"></i>
                </div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="devicon-java-plain"></i>
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
                  <i className="devicon-html5-plain"></i>
                </div>
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="devicon-css3-plain"></i>
                </div>
                <span className="skill-name">CSS</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="devicon-javascript-plain"></i>
                </div>
                <span className="skill-name">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="devicon-mysql-plain"></i>
                </div>
                <span className="skill-name">SQL</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="devicon-mongodb-plain"></i>
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
                  <i className="devicon-git-plain"></i>
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
