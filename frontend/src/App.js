import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/greet', { name });
      setGreeting(response.data.greeting);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What's your name?</h1>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleInputChange} 
        />
        <button onClick={handleButtonClick}>Submit</button>
        <h2>{greeting}</h2>
      </header>
    </div>
  );
}

export default App;
