// netlify/functions/hello.js

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.use(express.json());
app.use('/.netlify/functions/hello', router);

module.exports.handler = serverless(app);
