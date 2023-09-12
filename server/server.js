const express = require('express');
require('dotenv').config();
const db = require('./config/connection');

const app = express();

app.get('/', (req, res) => {
  res.send('Backend for codespace');
});

app.listen(3000, () => console.log('App is listening on port 3000.'));