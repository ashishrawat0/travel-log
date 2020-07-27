const express = require('express');
const app = express();
const https = require('https');
const morgan = require('morgan');
const cors = require('cors');
app.use(morgan('common'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req, res) => {
  res.send('ashish');
});

app.use((req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
});
app.use((error, req, res, nex) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Some error' : error.stack,
  });
});
https.createServer(
  app.listen(89, () => {
    console.log('Running at port 89');
  })
);
