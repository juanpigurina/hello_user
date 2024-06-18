const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/.netlify/functions/hello', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ greeting: `Hi ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

module.exports.handler = serverless(app);
