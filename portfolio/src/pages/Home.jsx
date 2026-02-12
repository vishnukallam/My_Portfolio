import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navButtons = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Technical Skills', path: '/skills' },
    { label: 'Certifications', path: '/certifications' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Kallam <span className="text-blue-500">Vishnu Vardhan Reddy</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Aspiring software developer with a solid foundation in computer science and hands-on experience in web development, passionate about continuous learning and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-2xl">
        {navButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => navigate(btn.path)}
            className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
