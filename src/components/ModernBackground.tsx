import React from 'react';

const ModernBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950 opacity-80"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/25 to-indigo-400/25 dark:from-purple-400/8 dark:to-indigo-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-400/6 dark:to-blue-400/6 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Geometric Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400 dark:text-blue-300"/>
          </pattern>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-purple-400 dark:text-purple-300"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagons */}
        <div className="absolute top-32 left-1/4 w-8 h-8 opacity-30 dark:opacity-20 animate-float">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
            <path d="M17.5 3.5L22 12L17.5 20.5H6.5L2 12L6.5 3.5H17.5Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-1/3 w-12 h-12 opacity-25 dark:opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-500">
            <path d="M17.5 3.5L22 12L17.5 20.5H6.5L2 12L6.5 3.5H17.5Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Circuit Lines */}
        <div className="absolute top-1/3 left-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/40 dark:via-blue-300/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 dark:via-purple-300/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Vertical Lines */}
        <div className="absolute top-20 right-1/4 h-20 w-px bg-gradient-to-b from-transparent via-indigo-400/40 dark:via-indigo-300/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full opacity-60 dark:opacity-40 animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 left-32 w-1.5 h-1.5 bg-purple-400 dark:bg-purple-300 rounded-full opacity-50 dark:opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-indigo-400 dark:bg-indigo-300 rounded-full opacity-40 dark:opacity-25 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 dark:opacity-15">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,20 600,100 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" className="animate-wave-slow">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ModernBackground;