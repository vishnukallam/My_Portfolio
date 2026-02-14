import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">Kallam Vishnu</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/skills" className="navbar-link">Skills</Link>
          <Link to="/certifications" className="navbar-link">Certifications</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
