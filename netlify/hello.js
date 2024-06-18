const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ greeting: `Hey there ${name}, you lookin mighty fine today, Big Daddy!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

module.exports.handler = serverless(app);
