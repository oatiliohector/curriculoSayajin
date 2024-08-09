const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World\n');
});

app.get('/goodbye', (req, res) => {
  res.status(200).send('Goodbye World\n');
});

module.exports.app = serverless(app);
