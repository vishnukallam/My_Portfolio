import React from 'react';

const About = () => {
  return (
    <section className="content-section active" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Objective</h3>
            <p>
              Aspiring software developer with a solid foundation in computer
              science and hands-on experience in web development. Passionate
              about continuous learning and innovation.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <p><strong>B.Tech in Computer Science and Engineering</strong></p>
            <p>Ramachandra College of Engineering, Eluru</p>
            <p>Jun 2022 – May 2026</p>
          </div>

          <div className="about-card">
            <h3>Personal Interests</h3>
            <ul>
              <li>Watching anime</li>
              <li>Exploring new technologies in my free time</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Interpersonal Skills</h3>
            <ul>
              <li>Flexible</li>
              <li>Active Learner</li>
              <li>Active Listener</li>
            </ul>
          </div>
        </div>

        <div className="contact-section">
          <h3>Get In Touch</h3>
          <div className="contact-links">
            <a href="mailto:emailme.vishnuvardan@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/vishnukallam" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://www.github.com/vishnukallam" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github"></i>
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
