import React, { useState, useEffect } from 'react';
import './styles/themeToggle.css'; // Ensure you have the CSS file imported

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
