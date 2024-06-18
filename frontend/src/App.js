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
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>What's your name?</h1>
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
    </div>
  );
}

export default App;
