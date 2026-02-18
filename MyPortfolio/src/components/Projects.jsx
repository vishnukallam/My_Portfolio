import React from 'react';

const Projects = () => {
  return (
    <section className="content-section active" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Magno Charger</h3>
            <p>
              A TIH-IoT Chanakya-funded hardware innovation designed to enhance
              battery longevity through automated, user-defined power
              termination. This intelligent auto-disconnect charger helps
              prevent overcharging and extends the lifespan of device batteries.
            </p>
            <div className="project-tags">
              <span className="project-tag">IoT</span>
              <span className="project-tag">Hardware</span>
              <span className="project-tag">Automation</span>
              <span className="project-tag">Innovation</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Electric Car Shop</h3>
            <p>
              A modern, responsive e-commerce layout designed specifically for
              showcasing electric vehicles. The platform features an intuitive
              interface for browsing and exploring the latest electric car
              models with detailed specifications and features.
            </p>
            <div className="project-tags">
              <span className="project-tag">E-commerce</span>
              <span className="project-tag">Web Design</span>
              <span className="project-tag">Frontend</span>
              <span className="project-tag">Responsive</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Employee Management System</h3>
            <p>
              A comprehensive full-stack application built using MongoDB and
              JavaScript frameworks. This system facilitates secure data
              persistence and streamlined record-keeping for employee
              information, enabling efficient management of workforce data with
              robust authentication and data handling capabilities.
            </p>
            <div className="project-tags">
              <span className="project-tag">Full Stack</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">CRUD</span>
            </div>
            <a
              href="https://github.com/vishnukallam/Employee_Database"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
