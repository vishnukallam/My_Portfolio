import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
