import React, { useReducer, useState } from 'react';

const initialState = {
  randomText: '',
  isDark: false,
};

const randomReducer = (currentState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_TEXT':
      return { ...currentState, randomText: action.payload };
    case 'TOGGLE_THEME':
      return { ...currentState, isDark: !currentState.isDark };
    default:
      return currentState;
  }
};

const TextEditor = () => {
  const [state, dispatch] = useReducer(randomReducer, initialState);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [preview, setPreview] = useState('');

  const textChangeHandler = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
    setCharCount(text.length);
    setPreview(text);
    dispatch({ type: 'SET_RANDOM_TEXT', payload: text });
  };

  const themeToggleHandler = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const transformText = (transformType) => {
    let transformedText = state.randomText;
    if (transformType === 'uppercase') {
      transformedText = state.randomText.toUpperCase();
    } else if (transformType === 'lowercase') {
      transformedText = state.randomText.toLowerCase();
    }
    setPreview(transformedText);
    dispatch({ type: 'SET_RANDOM_TEXT', payload: transformedText });
  };

  const clearText = () => {
    setPreview('');
    dispatch({ type: 'SET_RANDOM_TEXT', payload: '' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(state.randomText);
    alert('Text copied to clipboard!');
  };

  const styles = {
    backgroundColor: state.isDark ? '#333' : '#fff',
    color: state.isDark ? '#fff' : '#333',
  };

  return (
    <div className="text-editor" style={styles}>
      <button
        onClick={themeToggleHandler}
        style={{
          backgroundColor: state.isDark ? '#555' : '#ccc',
          color: state.isDark ? '#fff' : '#333',
          marginLeft:'93vw'
        }}
      >
        {state.isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <textarea
        value={state.randomText}
        onChange={textChangeHandler}
        placeholder="Enter Your Text Here:"
        style={{
          width: '100%',
          minHeight: '200px',
          backgroundColor: state.isDark ? '#555' : '#ccc',
          color: state.isDark ? '#fff' : '#333',
        }}
      />
      <div className="controls" style={{display:'flex', gap:'20px'}}>
        <button
          onClick={() => transformText('uppercase')}
          style={{
            backgroundColor: state.isDark ? '#555' : '#ccc',
            color: state.isDark ? '#fff' : '#333',
          }}
        >
          Uppercase
        </button>
        <button
          onClick={() => transformText('lowercase')}
          style={{
            backgroundColor: state.isDark ? '#555' : '#ccc',
            color: state.isDark ? '#fff' : '#333',
          }}
        >
          Lowercase
        </button>
        <button
          onClick={clearText}
          style={{
            backgroundColor: state.isDark ? '#555' : '#ccc',
            color: state.isDark ? '#fff' : '#333',
          }}
        >
          Clear Text
        </button>
        <button
          onClick={copyToClipboard}
          style={{
            backgroundColor: state.isDark ? '#555' : '#ccc',
            color: state.isDark ? '#fff' : '#333',
          }}
        >
          Copy To Clipboard
        </button>
      </div>
      <div className="statistics">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
      <div className="preview">
        <h3>Text Preview</h3>
        <p>{preview}</p>
      </div>
    </div>
  );
};

export default TextEditor;
