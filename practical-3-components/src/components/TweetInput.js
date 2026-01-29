import React, { useState } from 'react';

const TweetInput = () => {
  const [text, setText] = useState('');
  const MAX_CHARS = 50; // Requirement: Maximum 50 characters

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  // Requirement: Character counter turns red when exceeding 50 characters
  const isOverLimit = charCount > MAX_CHARS;
  
  // Requirement: Button must be disabled if input is empty OR count exceeds 50
  const isButtonDisabled = text.trim().length === 0 || isOverLimit;

  // Inline styles for clarity
  const styles = {
    container: { padding: '20px', maxWidth: '400px', border: '1px solid #ddd', borderRadius: '8px' },
    textarea: { width: '100%', height: '80px', padding: '10px', boxSizing: 'border-box' },
    counter: { 
      textAlign: 'right', 
      margin: '5px 0', 
      color: isOverLimit ? 'red' : 'gray' // Red feedback if limit exceeded
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '20px',
      border: 'none',
      backgroundColor: isButtonDisabled ? '#CFEFF9' : '#1DA1F2',
      color: 'white',
      cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <textarea
        placeholder="What's happening?"
        value={text}
        onChange={handleChange}
        style={styles.textarea}
      />
      
      {/* Visual Feedback: Counter */}
      <div style={styles.counter}>
        {charCount}/{MAX_CHARS}
      </div>

      <button 
        style={styles.button} 
        disabled={isButtonDisabled} // Logic: Empty OR > 50 chars
      >
        Tweet
      </button>
    </div>
  );
};

export default TweetInput;