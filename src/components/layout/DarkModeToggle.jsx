import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark)) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem('theme') === null) {
        e.matches ? enableDarkMode() : disableDarkMode();
      }
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    setIsDarkMode(true);
    localStorage.setItem('theme', 'dark');
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
    setIsDarkMode(false);
    localStorage.setItem('theme', 'light');
  };

  const toggleDarkMode = () => {
    isDarkMode ? disableDarkMode() : enableDarkMode();
  };

  return (
    <button 
      onClick={toggleDarkMode} 
      className="
        fixed bottom-4 right-4 z-[9999]
        p-2 rounded-full 
        bg-white/10 dark:bg-black/10
        backdrop-blur-md
        border border-white/20 dark:border-black/20
        text-gray-700 dark:text-gray-300
        hover:bg-white/20 dark:hover:bg-black/20
        transition-all duration-300
        shadow-sm
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-school-primary dark:focus:ring-school-secondary
      "
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-pressed={isDarkMode}
    >
      <span className="sr-only">
        {isDarkMode ? 'Disable' : 'Enable'} dark mode
      </span>
      {isDarkMode ? (
        <SunIcon 
          className="h-6 w-6 text-yellow-500 transition-all duration-300 ease-in-out" 
          aria-hidden="true"
        />
      ) : (
        <MoonIcon 
          className="h-6 w-6 text-indigo-600 transition-all duration-300 ease-in-out" 
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default DarkModeToggle; 