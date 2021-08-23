const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', ({ res }) => {
  res.json({
    api: 'API BIBLIOTECA',
    version: 'V1',
  });
});

module.exports = app;
