const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.post('/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ greeting: `Hello ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

app.use('/.netlify/functions/hello', router);

module.exports.handler = serverless(app);
