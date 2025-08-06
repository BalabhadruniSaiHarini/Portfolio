import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Internships from './components/Internships';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internships />
          <Certifications />
          <Achievements />
          <SoftSkills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;