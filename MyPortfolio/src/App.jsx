import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubRepos from './components/GitHubRepos';
import Certifications from './components/Certifications';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isHome={isHome}
        setIsHome={setIsHome}
      />

      {isHome ? (
        <Hero />
      ) : (
        <>
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'github-repos' && <GitHubRepos />}
          {activeSection === 'certifications' && <Certifications />}
        </>
      )}
    </div>
  );
}

export default App;
