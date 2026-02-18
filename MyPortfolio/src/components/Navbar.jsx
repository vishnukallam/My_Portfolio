import React from 'react';

const Navbar = ({ activeSection, setActiveSection, isHome, setIsHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId) => {
    setIsHome(sectionId === 'home');
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          KALLAM VISHNU VARDHAN REDDY
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`} id="navbarLinks">
          <a href="#home" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#about" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          <a href="#skills" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
          <a href="#projects" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
          <a href="#github-repos" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('github-repos'); }}>GitHub Repos</a>
          <a href="#certifications" className="navbar-link" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>Certifications</a>
        </div>
        <div className="menu-toggle" id="menuToggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
