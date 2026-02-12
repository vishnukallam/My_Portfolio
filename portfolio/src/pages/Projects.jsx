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
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">Featured <span className="text-blue-500">Projects</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto">A selection of my recent work in both hardware and software development.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="group bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
            <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block">
              {project.tag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
