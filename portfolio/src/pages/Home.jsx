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
    <div className="home-hero">
      <div>
        <h1 className="hero-name">
          Kallam <span className="text-accent">Vishnu Vardhan Reddy</span>
        </h1>
        <p className="hero-objective">
          Aspiring software developer with a solid foundation in computer science and hands-on experience in web development, passionate about continuous learning and innovation.
        </p>
      </div>

      <div className="home-nav-grid">
        {navButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => navigate(btn.path)}
            className="nav-button"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
