const express = require('express');
const serverless = require('serverless-http');

const app = express();

require('dotenv').config()

app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/goodbye', (req, res) => {
  res.status(200).send('Goodbye World\n');
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
} else {
  module.exports.app = serverless(app);
}
