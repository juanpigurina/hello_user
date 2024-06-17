import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/greet', { name });
      setGreeting(response.data.greeting);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>What's your name?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
