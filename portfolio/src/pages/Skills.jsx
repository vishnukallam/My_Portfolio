const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Core Java', icon: 'devicon-java-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'SQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' }
  ];

  return (
    <div>
      <div className="projects-header">
        <h2 className="section-title">Technical <span className="text-accent">Skills</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '32rem', margin: '0 auto' }}>
          Technologies I work with to bring ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <i className={skill.icon}></i>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
