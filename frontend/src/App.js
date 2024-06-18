import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/.netlify/functions/hello', { name });
      setGreeting(response.data.greeting);
    } catch (error) {
      console.error('Error submitting name:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Hello App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
        {greeting && <h2>{greeting}</h2>}
      </header>
    </div>
  );
}

export default App;
