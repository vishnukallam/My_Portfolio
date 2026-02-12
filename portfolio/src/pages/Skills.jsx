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
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">Technical <span className="text-blue-500">Skills</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto">Technologies I work with to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
            <i className={`${skill.icon} text-6xl mb-4 group-hover:scale-110 transition-transform`}></i>
            <span className="text-lg font-medium text-slate-300 group-hover:text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
