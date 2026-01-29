import React, { useState } from 'react';

const ThemeSwitcher = () => {
  // State to track the current theme: 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define styles based on the current mode
  const themeStyles = {
    container: {
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      // Requirement: Light Mode: White background, Dark Mode: Dark background
      backgroundColor: isDarkMode ? '#333' : '#fff',
      // Requirement: Light Mode: Dark text, Dark Mode: White text
      color: isDarkMode ? '#fff' : '#333',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#4fd1ed', // Color from your screenshot
      border: 'none',
      borderRadius: '4px',
      color: '#000',
      fontWeight: 'bold',
      marginTop: '15px'
    }
  };

  return (
    <div style={themeStyles.container}>
      <p>
        This is a preview of the theme switcher component. 
        Click the button to toggle between light and dark modes.
      </p>
      
      {/* Requirement: Button text should change based on current mode */}
      <button style={themeStyles.button} onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;