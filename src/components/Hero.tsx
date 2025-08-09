import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Mail, Linkedin, Github, Sparkles } from 'lucide-react';

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
      {/* Modern Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Wave Layers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.15)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.08)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.12)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.08)" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.06)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.06)" />
            </linearGradient>
          </defs>
          
          {/* Wave Layer 1 */}
          <path d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" fill="url(#wave1)" className="animate-wave-slow">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Wave Layer 2 */}
          <path d="M0,450 C400,350 800,550 1200,450 L1200,800 L0,800 Z" fill="url(#wave2)" className="animate-wave-medium">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -30,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Wave Layer 3 */}
          <path d="M0,500 C200,400 900,600 1200,500 L1200,800 L0,800 Z" fill="url(#wave3)" className="animate-wave-fast">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,0; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          {/* Triangular shapes */}
          <div className="absolute top-20 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-white/20 animate-float"></div>
          <div className="absolute top-40 right-32 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-white/15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-32 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-white/10 animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Diamond shapes */}
          <div className="absolute top-60 right-20 w-6 h-6 bg-white/10 transform rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 right-40 w-4 h-4 bg-white/15 transform rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute top-80 left-40 w-8 h-8 bg-white/8 transform rotate-45 animate-spin-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 via-indigo-500/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-indigo-300/12 via-blue-400/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/8 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/6 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/4 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating lines */}
        <div className="absolute top-32 left-1/3 w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 h-24 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-8 animate-fade-in" data-aos="fade-right">
            
            {/* Name with Gradient */}
            <div className="space-y-6">
              {/* Greeting - moved closer to name */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-green-400 font-medium">Hello, I'm</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-slide-up">
                  HARINI
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-100 via-pink-100 to-white bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  BALABHADRUNI
                </span>
              </h1>
              
              {/* Sparkle Effect */}
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Typewriter Effect */}
            <div className="h-16 mb-6" data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl md:text-2xl font-medium text-blue-100">
                {displayText}
                <span className="animate-pulse text-white">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed animate-fade-in-delay-2" data-aos="fade-up" data-aos-delay="600">
              Passionate about <span className="text-yellow-400 font-semibold">semiconductor innovation</span> and 
              <span className="text-pink-400 font-semibold"> digital design verification</span>, 
              bringing creativity to complex VLSI challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 animate-bounce-in" data-aos="fade-up" data-aos-delay="800">
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <a
                href="/Harini_resume.pdf"
                download
                className="group px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-md rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4" data-aos="fade-up" data-aos-delay="1000">
              <span className="text-blue-200 text-sm">Connect with me:</span>
              <div className="flex space-x-3">
                <a href="mailto:harini.y2k22@gmail.com" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image/Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              
              {/* Animated Background Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-80 h-80 border-2 border-dashed border-white/20 rounded-full"></div>
              </div>
              <div className="absolute inset-4 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                <div className="w-72 h-72 border border-white/10 rounded-full"></div>
              </div>
              
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-md flex items-center justify-center shadow-2xl">
                    
                    {/* Animated H Logo */}
                    <div className="relative">
                      <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-subtle">
                        H
                      </div>
                      
                      {/* Blinking Dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      
    </section>
  );
};

export default Hero;