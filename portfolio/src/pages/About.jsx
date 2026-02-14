const About = () => {
  return (
    <div className="about-container">
      <section>
        <h2 className="about-section-header">About Me</h2>
        <div className="grid-2">
          <div className="card">
            <h3 className="card-title">Education</h3>
            <p>
              <strong>B.Tech in Computer Science and Engineering</strong><br />
              Ramachandra College of Engineering, Eluru<br />
              <span className="text-accent">CGPA: 7.7</span>
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Interpersonal Skills</h3>
            <ul className="card-list">
              <li>Flexible</li>
              <li>Active Learner</li>
              <li>Active Listener</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="interest-card">
        <h3 className="card-title" style={{ fontSize: '1.5rem' }}>Personal Interests</h3>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
          When I'm not coding, I enjoy watching <span style={{ color: 'white', fontStyle: 'italic' }}>anime</span> and constantly <span style={{ color: 'white' }}>exploring new tech</span> to stay updated with the latest trends in the software industry.
        </p>
      </section>

      <section>
        <h2 className="about-section-header">Contact Me</h2>
        <div className="contact-links">
          <a
            href="tel:+919346618586"
            className="contact-link"
          >
            <span>📞</span> +91 93466 18586
          </a>
          <a
            href="mailto:emailme.vishnuvardan@gamil.com"
            className="contact-link"
          >
            <span>📧</span> Email
          </a>
          <a
            href="https://www.linkedin.com/in/vishnukallam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>🔗</span> LinkedIn
          </a>
          <a
            href="https://www.github.com/vishnukallam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link github-cta"
          >
            <span>💻</span> Follow my GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
