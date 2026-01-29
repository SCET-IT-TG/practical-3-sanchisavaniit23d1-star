import React, { useState } from 'react';

const Counter = () => {
  // Requirement: Initial state must be 0
  const [count, setCount] = useState(0);

  // Event Handlers for state updates
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Styles to match the screenshot provided
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px'
    },
    countDisplay: {
      fontSize: '24px',
      fontWeight: 'bold',
      minWidth: '30px',
      textAlign: 'center'
    },
    btnDecrement: {
      backgroundColor: '#e53e3e', // Red color from screenshot
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    btnIncrement: {
      backgroundColor: '#38a169', // Green color from screenshot
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      {/* Requirement: Separate button for Decrement */}
      <button style={styles.btnDecrement} onClick={decrement}>
        Decrement
      </button>

      {/* Requirement: Current count must be displayed */}
      <span style={styles.countDisplay}>{count}</span>

      {/* Requirement: Separate button for Increment */}
      <button style={styles.btnIncrement} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;