import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Phone, MapPin } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Electronics Engineer | VLSI Design Verification Specialist';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
      <ParticleBackground />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 animate-float" data-aos="fade-down">
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-400">
                H
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-ping"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-slide-up" data-aos="fade-up">
          HARINI BALABHADRUNI
        </h1>

        {/* Typewriter Effect */}
        <div className="h-16 mb-6 animate-fade-in-delay" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2" data-aos="fade-up" data-aos-delay="400">
          Passionate about semiconductor innovation and digital design
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-blue-100 animate-slide-in-bottom" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>9701709113</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Mandapeta, Andhra Pradesh</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-bounce-in" data-aos="fade-up" data-aos-delay="800">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-subtle"
          >
            View My Work
          </button>
          <a
            href="/Harini_resume.pdf"
            download
            className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-400 hover:text-blue-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce-slow" data-aos="fade-up" data-aos-delay="1000">
          <button onClick={scrollToAbout} className="text-blue-300 hover:text-white transition-colors duration-200">
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;