import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === null) return true; // Default to dark theme
      
      // Handle both boolean JSON and string values
      if (saved === 'true' || saved === 'false') {
        return JSON.parse(saved);
      }
      
      // Handle legacy string values like "dark" or "light"
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      
      // Try to parse as JSON
      return JSON.parse(saved);
    } catch (error) {
      console.warn('Invalid theme data in localStorage, using default:', error);
      // Clear corrupted data
      localStorage.removeItem('theme');
      return true; // Default to dark theme
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
