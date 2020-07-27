const express = require('express');
const app = express();
const https = require('https');
const morgan = require('morgan');
const cors = require('cors');

const middlerware = require('./middelwares');

app.use(morgan('common'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use(middlerware.notFound);
app.use(middlerware.errorHandler);
https.createServer(
  app.listen(89, () => {
    console.log('Running at port 89');
  })
);
