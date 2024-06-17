const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ greeting: `Hello ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
