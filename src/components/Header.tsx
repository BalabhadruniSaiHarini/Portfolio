import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#internships', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HARINI BALABHADRUNI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 hover:from-blue-200 hover:to-purple-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl group"
            >
              <div className="relative w-6 h-6">
                {isDark ? (
                  <Sun className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300 animate-spin-slow" />
                ) : (
                  <Moon className="w-6 h-6 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300" />
                )}
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
                  isDark ? 'bg-yellow-400' : 'bg-indigo-400'
                }`}></div>
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 hover:from-blue-200 hover:to-purple-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl group"
            >
              <div className="relative w-6 h-6">
                {isDark ? (
                  <Sun className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300 animate-spin-slow" />
                ) : (
                  <Moon className="w-6 h-6 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300" />
                )}
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
                  isDark ? 'bg-yellow-400' : 'bg-indigo-400'
                }`}></div>
              </div>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 transform"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg animate-slide-down">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;