import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-500">Kallam Vishnu</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400 transition-colors">Skills</Link>
          <Link to="/certifications" className="hover:text-blue-400 transition-colors">Certifications</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
