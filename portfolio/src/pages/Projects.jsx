const Projects = () => {
  const projects = [
    {
      title: 'Magno Charger',
      description: 'An intelligent auto-disconnect hardware innovation funded by TIH-IoT Chanakya to enhance battery longevity.',
      tag: 'Hardware Innovation',
      icon: '⚡'
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack application using MongoDB and JavaScript for secure data persistence.',
      tag: 'Full Stack',
      icon: '👥'
    },
    {
      title: 'Electric Car Shop',
      description: 'An e-commerce layout for modern electric cars.',
      tag: 'Frontend',
      icon: '🚗'
    }
  ];

  return (
    <div>
      <div className="projects-header">
        <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '32rem', margin: '0 auto' }}>
          A selection of my recent work in both hardware and software development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-icon-box">
              {project.icon}
            </div>
            <span className="project-tag">
              {project.tag}
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
