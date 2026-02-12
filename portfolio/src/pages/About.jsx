const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 inline-block">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
            <p className="text-slate-300">
              <span className="font-bold text-white">B.Tech in Computer Science and Engineering</span><br />
              Ramachandra College of Engineering, Eluru<br />
              <span className="text-blue-300">CGPA: 7.7</span>
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Interpersonal Skills</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Flexible</li>
              <li>Active Learner</li>
              <li>Active Listener</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Personal Interests</h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          When I'm not coding, I enjoy watching <span className="text-white italic">anime</span> and constantly <span className="text-white">exploring new tech</span> to stay updated with the latest trends in the software industry.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 inline-block">Contact Me</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:emailme.vishnuvardan@gamil.com"
            className="flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-xl border border-slate-800 hover:border-blue-500 transition-all text-slate-300 hover:text-white"
          >
            <span>📧</span> Email
          </a>
          <a
            href="https://www.linkedin.com/in/vishnukallam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-xl border border-slate-800 hover:border-blue-500 transition-all text-slate-300 hover:text-white"
          >
            <span>🔗</span> LinkedIn
          </a>
          <a
            href="https://www.github.com/vishnukallam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition-all text-white font-semibold shadow-lg shadow-blue-900/40"
          >
            <span>💻</span> Follow my GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
